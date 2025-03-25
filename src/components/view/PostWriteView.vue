<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Editor} from "@toast-ui/editor";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer"
import {postService} from "@/domain/post/postService";
import {imageService} from "@/domain/image/imageService";
import {Image} from "@/domain/image/image";
import {useRoute} from "vue-router";
import {postCreateType} from "@/domain/post/postCreate";
import CategoryConfirmModal from "@/components/component/CategoryConfirmModal.vue";

const route = useRoute()
let editor: Editor;
let viewer: Viewer;

const isCategoryModalVisible = ref(false);

const clientData: postCreateType = {
  postId: "",
  title: ref(""),
  content: "",
  thumbnail: "",
  categoryId: null
}


const images = ref<Image[]>([]);

// 모달 열기 함수
const showCategoryModal = () => {
  console.log("작동")
  isCategoryModalVisible.value = true;
};

// 모달 닫기 함수
const closeCategoryModal = () => {
  isCategoryModalVisible.value = false;
};


function scrollToBottom() {
  const previewEl = document.querySelector('.editor-preview') as HTMLElement;
  if (previewEl) {
    previewEl.scrollTop = previewEl.scrollHeight;
  }
}

function initEditor() {
  editor = new Editor({
    el: document.querySelector('#editor'),
    initialEditType: 'markdown',
    hideModeSwitch: true,
    hooks: {
      addImageBlobHook: (file, callback) => {
        try {
          imageService.uploadImage(clientData.postId, file)
              .then(image => {
                if (clientData.thumbnail) {
                  clientData.thumbnail = image.url
                }
                console.log(image)
                images.value.push(image)

                callback(image.url, 'image')
              })
        } catch (e) {
          callback(e)
        }
      }
    }
  })

  viewer = new Viewer({
    el: document.querySelector('.editor-preview'),

  })

  editor.on('change', () => {
    viewer.setMarkdown(editor.getMarkdown())
    scrollToBottom();
  })
}


onMounted(async (): Promise<void> => {
      initEditor();
      clientData.postId = await postService.getPostId()
    }
)


</script>

<template>
  <div>
    <div class="editor-container">
      <div class="editor-write">
        <div class="input-group">
          <input id="title-input" type="text" class="form-control" placeholder="제목" v-model="clientData.title.value">
        </div>
        <div id="editor" class="editor-write"></div>
        <div class="button-group">
          <h1 class="exit">🔚</h1>
          <div class="save-btn-group">
            <button type="button" class="btn btn-success">임시 저장</button>
            <button type="button" class="btn btn-success" @click="showCategoryModal">저장</button>
          </div>
        </div>
      </div>
      <div class="editor-preview">
      </div>
    </div>

    <CategoryConfirmModal v-show="isCategoryModalVisible"/>
  </div>
</template>

<style>
@import '@toast-ui/editor/dist/toastui-editor.css';

.toastui-editor-tabs {
  display: none;
}

.editor-container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.editor-write {
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid #ddd;

  .input-group {
    display: flex;
    flex: 0 0 8%;

    .category-select {
      flex: 0.5;

      select {
        flex: 1;
      }
    }
  }

  .category-select-group {
    flex: 0 0 8%;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    flex: 0 0 8%;

    .save-btn-group {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      flex: 0 0 50%;

      button {
        flex: 0.5;
      }
    }

    .exit {
      cursor: pointer;
    }
  }

}

.editor-preview {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f9f9f9;
  border-left: 1px solid #ddd;
  font-family: 'Arial', sans-serif;

  height: 100%;
}

</style>
