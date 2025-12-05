  function uploadImage(type) {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";

        input.onchange = e => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () => {
                document.getElementById(type + "-preview").src = reader.result;
            };
            reader.readAsDataURL(file);
        };

        input.click();
    }

    function deleteImage(type) {
        document.getElementById(type + "-preview").src = "https://via.placeholder.com/80";
    }