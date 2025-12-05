
const titleInput = document.getElementById("pageTitle");
const linkInput = document.getElementById("pageLink");
const contentInput = document.getElementById("pageContent");

const prevTitle = document.getElementById("prevTitle");
const prevLink = document.getElementById("prevLink");
const prevBody = document.getElementById("prevBody");

const emptyBox = document.getElementById("previewEmpty");
const contentBox = document.getElementById("previewContent");

function updatePreview() {
    // إخفاء placeholder
    emptyBox.style.display = "none";
    contentBox.style.display = "block";

    // تحديث البيانات
    prevTitle.textContent = titleInput.value;
    prevLink.textContent = linkInput.value;
    prevBody.textContent = contentInput.value.replace(/\n/g, "<br>");
}

titleInput.addEventListener("input", updatePreview);
linkInput.addEventListener("input", updatePreview);
contentInput.addEventListener("input", updatePreview);


function updatePreviewEditor() {
    const content = tinymce.get("pageContent").getContent();
    document.getElementById("previewEmpty").style.display = "none";
    document.getElementById("previewContent").style.display = "block";
    document.getElementById("prevBody").innerHTML = content;
}
let ckeditorInstance;

ClassicEditor
    .create(document.querySelector('#pageContent'), {
        language: 'ar',
        toolbar: {
            items: [
                'undo', 'redo', '|',
                'heading', '|',
                'bold', 'italic', 'underline', 'strikethrough', 'highlight', '|',
                'fontSize', 'fontColor', 'fontBackgroundColor', '|',
                'alignment:left', 'alignment:center', 'alignment:right', 'alignment:justify', '|',
                'bulletedList', 'numberedList', '|',
                'outdent', 'indent', '|',
                'link', 'insertImage', 'insertTable', 'blockQuote'
            ]
        },
        fontSize: {
            options: [12, 14, 16, 18, 20, 24, 28, 32]
        },
        alignment: {
            options: ['left', 'center', 'right', 'justify']
        }
    })
    .then(editor => {
        ckeditorInstance = editor;

        // تحديث المعاينة
        editor.model.document.on('change:data', () => {
            updatePreviewCK();
        });
    })
    .catch(console.error);


function updatePreviewCK() {
    const content = ckeditorInstance.getData();

    document.getElementById("previewEmpty").style.display = "none";
    document.getElementById("previewContent").style.display = "block";

    document.getElementById("prevBody").innerHTML = content;
}


