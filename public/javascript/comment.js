// create a comment
async function commentFormHandler(event) {
    event.preventDefault();

    const commentText = document.querySelector("textarea[name='comment-body']").value;

    // extract post id
    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    // users cannot submit an empty comment
    if (commentText) {
        const response = await fetch(`/api/comments`, {
            method: "POST", 
            body: JSON.stringify({ postId, commentText }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        };
    };
};

// event listener
document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);