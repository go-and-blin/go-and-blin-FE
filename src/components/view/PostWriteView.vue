<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Editor} from "@toast-ui/editor";
import {postService} from "@/domain/post/postService";
import {imageService} from "@/domain/image/imageService";
import {Image} from "@/domain/image/image";

let editor: Editor;
let postId: string;
let thumbnail: string;
const images = ref<Image[]>([]);

function initEditor() {
  editor = new Editor({
    el: document.querySelector('#editor'),
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    height: '800px',
    placeholder: '내용을 적어주세요.',
    hooks: {
      addImageBlobHook: (file, callback) => {
        try {
          imageService.uploadImage(postId, file)
              .then(image => {
                if (thumbnail) {
                  thumbnail = image.url
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

}

onMounted(async (): Promise<void> => {
      postId = await postService.getPostId()
      initEditor();
    }
)


</script>

<template>
  <div>
    <div id="editor"/>
  </div>
</template>

<style>
@import '@toast-ui/editor/dist/toastui-editor.css';
</style>
