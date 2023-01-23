$(document).ready(function () {
  $.getJSON("/api/postit").then(addPostIts);

  $(".btn-one").on("click", function (e) {
    e.stopPropagation();
    if ($("#title").val() === "" || $("#content").val() === "") {
      $("#title, #content").attr(
        "placeholder",
        "Please enter text to continue."
      );
      return false;
    }
    createPostIt();
  });

  $(".btn-two").on("click", function (e) {
    e.stopPropagation();
    $("#title, #content").val("");
  });

  $(".second-row").on("click", ".fa-trash-alt", function (e) {
    e.stopPropagation();
    deletePostIt($(this).parents(".col-4"));
  });

  $(".second-row").on("click", ".fa-check-circle", function (e) {
    const parent = $(this).parents(".col-4");
    const findSelector = $(this).parent().siblings(".card-header");
    const icon = $(this);
    e.stopPropagation();
    updatePostIt(parent, findSelector, icon);
  });
});

function addPostIts(postIt) {
  postIt.forEach(function (postIt) {
    addPostIt(postIt);
  });
}

function addPostIt(postit) {
  const date = new Date(postit.created);
  const test = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  const newPostIt = $(`<div class="col-4">
							<div class="card" id="card">
								<div class="card-header" id="postit-color">
  										<h4>${test}</h4>
  								</div>
  								<div class="card-body">
    								<h5 class="card-title">${postit.title}</h5>
    								<p class="card-text">${postit.content}</p>	
  								</div>
  								<div class="card-footer bg-transparent">
  									<i class="far fa-trash-alt"></i>
  									<i class="far fa-check-circle"></i>		
  								</div>
							</div>
						</div>`);

  newPostIt.data("id", postit._id);
  newPostIt.data("completed", postit.completed);
  if (postit.completed) {
    newPostIt.children(".card").addClass("done");
    newPostIt.children(".card").find(".card-header").removeAttr("id");
    newPostIt
      .children(".card")
      .find(".fa-check-circle")
      .addClass("fa-times-circle");
  }
  $(".second-row").append(newPostIt);
}

function createPostIt() {
  let title = $("#title").val(),
    content = $("#content").val();

  $.post("/api/postit/create", {
    title: title,
    content: content,
  })
    .then(function (newPostIt) {
      $("#title, #content").val("");
      $("#title").attr("placeholder", "Title of Post-it");
      $("#content").attr("placeholder", "Add the content of your post here!");
      addPostIt(newPostIt);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function updatePostIt(parent, selector, icon) {
  const id = parent.data("id"),
    isDone = !parent.data("completed"),
    updateData = {
      completed: isDone,
    };

  $.ajax({
    method: "PUT",
    url: `/api/postit/update/${id}`,
    data: updateData,
  })
    .then(function () {
      if (selector.attr("id")) {
        selector.removeAttr("id");
        parent.children(".card").addClass("done");
        icon.toggleClass("fa-times-circle");
        parent.data("completed", isDone);
      } else {
        selector.attr("id", "postit-color");
        parent.children(".card").removeClass("done");
        icon.removeClass("fa-times-circle");
        parent.data("completed", false);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function deletePostIt(postit) {
  const click = postit.data("id");

  $.ajax({
    method: "DELETE",
    url: `/api/postit/delete/${click}`,
  })
    .then(function () {
      postit.remove();
    })
    .catch(function (err) {
      console.log(err);
    });
}
