// extracted global post id
const postId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

// edit post
async function editPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector("input[name='post-title']").value.trim();
    const body = document.querySelector("textarea[name='post-body']").value;

    const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT", 
        body: JSON.stringify({ title, body }),
        headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    };
};

// delete post
async function deletePostHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    };
};

// event listeners
document.querySelector(".edit-post-form").addEventListener("submit", editPostHandler);
document.querySelector(".delete-post-btn").addEventListener("click", deletePostHandler);