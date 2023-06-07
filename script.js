// ***FUNCTIONS*** //
    //Hide
    function makeHidden(element){
        element.classList.remove("visible");
        element.classList.add("hidden")
    }
    
    //Make visible
    function makeVisible(element){
        element.classList.remove("hidden");
        element.classList.add("visible")
    }
    

// ***CONSTANTS*** //
const mainContainer = document.querySelector(".mainContainer");

    // Comment containers
const commentContainer1 = document.querySelector(".commentContainer1");
const commentContainer2 = document.querySelector(".commentContainer2");
const commentContainer3 = document.querySelector(".commentContainer3");
const commentContainer4 = document.querySelector(".commentContainer4");

    // Comments
const comment1 = document.querySelector(".comment1");
const comment2 = document.querySelector(".comment2");
const comment3 = document.querySelector(".comment3");
const comment4 = document.querySelector(".comment4");

    // Dates
const date1 = document.querySelector(".commentContainer1 .date");
const date2 = document.querySelector(".commentContainer2 .date");
const date3 = document.querySelector(".commentContainer3 .date");
const date4 = document.querySelector(".commentContainer4 .date");

    // Names
const name1Container = document.querySelector(".name1");
const name2Container = document.querySelector(".name2");
const name3Container = document.querySelector(".name3");
const name4Container = document.querySelector(".name4");

    // Upvotes
const upvoteNumber1 = document.querySelector(".commentContainer1 .upvoteNumber");
const upvoteNumber2 = document.querySelector(".commentContainer2 .upvoteNumber");
const upvoteNumber3 = document.querySelector(".commentContainer3 .upvoteNumber");
const upvoteNumber4 = document.querySelector(".commentContainer4 .upvoteNumber");

    // Profile pic src
const profilePic1 = document.querySelector(".commentContainer1 .profilePic");
const profilePic2 = document.querySelector(".commentContainer2 .profilePic");
const profilePic3 = document.querySelector(".commentContainer3 .profilePic");
const profilePic4 = document.querySelector(".commentContainer4 .profilePic");

    // Modal
const modalContainer = document.querySelector(".modalContainer");
const deleteButton = document.querySelector(".deleteButton");
const cancelButton = document.querySelector(".cancelButton");
const confirmButton = document.querySelector(".confirmButton");

    //Buttons
const replyButtons = document.querySelectorAll(".replyButton");
const editButton = document.querySelector(".editButton");


// ***FETCHING DATA & ADDING THEM TO ELEMENTS*** //
fetch("data.json")
	.then(response => response.json())
	.then(data => {
    // Variables for JSON comments
		const comment1Data = data.comments[0];
		const comment2Data = data.comments[1];
		const comment3Data = comment2Data.replies[0];
		const comment4Data = comment2Data.replies[1];
    // Comments
		comment1.innerHTML = comment1Data.content;
		comment2.innerHTML = comment2Data.content;
		comment3.innerHTML = `@maxblagun ${comment3Data.content}`;
		comment4.innerHTML = `@ramsesmiron ${comment4Data.content}`;

	// Dates
		date1.innerHTML = comment1Data.createdAt;
		date2.innerHTML = comment2Data.createdAt;
		date3.innerHTML = comment3Data.createdAt;
		date4.innerHTML = comment4Data.createdAt;

	// Names
		name1Container.innerHTML = comment1Data.user.username;
		name2Container.innerHTML = comment2Data.user.username;
		name3Container.innerHTML = comment3Data.user.username;
		name4Container.innerHTML = comment4Data.user.username;

	// Upvotes
		upvoteNumber1.innerHTML = comment1Data.score;
		upvoteNumber2.innerHTML = comment2Data.score;
		upvoteNumber3.innerHTML = comment3Data.score;
		upvoteNumber4.innerHTML = comment4Data.score;

	// Profile pic src
		profilePic1.src = comment1Data.user.image.png;
		profilePic2.src = comment2Data.user.image.png;
		profilePic3.src = comment3Data.user.image.png;
		profilePic4.src = comment4Data.user.image.png;
	})
	.catch(error => {
		console.log("Error!", error);
	});


// ***MODAL HANDLING*** //
    //Make modal visible by pressing "delete" button
deleteButton.addEventListener("click", function(){
    makeVisible(modalContainer)
})
    //Make modal invisible by pressing "cancel" button
cancelButton.addEventListener("click", function(){
    makeHidden(modalContainer);
})
    // Removing comment by pressing "confirm" button
confirmButton.addEventListener("click", function(){
    makeHidden(commentContainer4);
    makeHidden(modalContainer);
})

// ***REPLY BUTTON HANDLING*** //
for (let i = 0; i < replyButtons.length; i++){
    replyButtons[i].addEventListener("click", function(){
        //New main container creation
        const newDiv = document.createElement("div");
        newDiv.classList.add("commentInput");
        
    
        //New Textarea creation
        const newTextArea = document.createElement("textarea");
        newTextArea.classList.add("commentTextarea");
        newDiv.appendChild(newTextArea)
    
        //New Profile Pic creation
        const newProfilePic = document.createElement("img");
        newProfilePic.src = "images/avatars/image-juliusomo.png";
        newProfilePic.classList.add("profilePic");
        newDiv.appendChild(newProfilePic); 

        //New Reply Button creation
        const newEditButton = document.createElement("button");
        newEditButton.innerHTML = "REPLY";
        newEditButton.classList.add("sendButton")
        newDiv.appendChild(newEditButton);

        //NEW REPLY BUTTON FUNCTIONALITY
        newEditButton.addEventListener("click", function(){
			// Creating new comment container
        const newDiv = document.createElement("div");
        newDiv.classList.add("commentContainer");
        newDiv.classList.add("commentContainer3");  

			// Creating new comment area
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = newTextArea.value;

			
        	// Creating new editbutton container
		const newEditContainer = document.createElement("div");
		newEditContainer.style.display = "flex";
		newEditContainer.style.height = "1.2rem";
		newEditContainer.style.width = "4rem",
		newEditContainer.style.justifyContent = "flex-end";
		newEditContainer.style.alignItems = "center";	
		newEditContainer.style.alignSelf = "center";	
		newEditContainer.style.justifySelf = "flex-end";	
		newDiv.appendChild(newEditContainer);

			// Creating new edit button image     
        const newImageEdit = document.createElement("img");
        newImageEdit.classList.add("imageEdit")
        newImageEdit.src = "images/icon-edit.svg";
		newImageEdit.style.paddingBottom = "0.6rem";
		newImageEdit.style.margin = "0px";
		newImageEdit.style.justifySelf = "flex-end";	
		newEditContainer.appendChild(newImageEdit);
			
			
        
            // Creating new edit button
        const newEditButton = document.createElement("button");
        newEditButton.classList.add("editButton")
        newEditButton.innerHTML = "Edit";
		newEditButton.style.padding = "0px";
		newEditButton.style.display = "inline";
		newEditButton.style.justifySelf = "flex-end";	
		newEditContainer.appendChild(newEditButton)

		
           

        // Creating new upvote container   
        const newUpvotesContainer = document.createElement("div");
        newUpvotesContainer.classList.add("upvotesContainer");

         // Creating new upvote plus button 
         const newUpvotePlusButton = document.createElement("button");
         newUpvotePlusButton.classList.add("upvotePlus");


         const newUpvotePlusImage = document.createElement("img");
         newUpvotePlusImage.src = "images/icon-plus.svg";

            
          // Creating new upvote minus button 
          const newUpvoteMinusButton = document.createElement("button");
          newUpvoteMinusButton.classList.add("upvoteMinus");


          const newUpvoteMinusImage = document.createElement("img");
          newUpvoteMinusImage.src = "images/icon-minus.svg";

    
          // Creating new upvote number 
          const newUpvoteNumber = document.createElement("div");
          newUpvoteNumber.innerHTML = "0";
          newUpvoteNumber.classList.add("upvoteNumber");



          // Creating new profile container
          const newProfile = document.createElement("div");
          newProfile.classList.add("profile");
		  newProfile.style.width = "10rem";
          newDiv.appendChild(newProfile);

           // Creating new profile pic img
            const newProfilePic = document.createElement("img");
            newProfilePic.classList.add("profilePic");
            newProfilePic.src = "images/avatars/image-juliusomo.png";
            newProfile.appendChild(newProfilePic);


             // Creating new profile pic name
             const newName = document.createElement("span");
             newName.classList.add("name");
             newName.innerHTML = "juliusomo";
             newProfile.appendChild(newName);

            // Creating new profile pic date
            const newDate = document.createElement("span");
            newDate.classList.add("date");
            newDate.innerHTML = "just now";
            newProfile.appendChild(newDate);
        
          // Adding the child elements to new comment container
        replyButtons[i].parentNode.insertAdjacentElement('afterend', newDiv);
        newDiv.appendChild(newComment)
     
        newDiv.appendChild(newUpvotesContainer);

        newUpvotesContainer.appendChild(newUpvotePlusButton);
        newUpvotePlusButton.appendChild(newUpvotePlusImage)
        newUpvotesContainer.appendChild(newUpvoteNumber);

        newUpvotesContainer.appendChild(newUpvoteMinusButton);
        newUpvoteMinusButton.appendChild(newUpvoteMinusImage)

        this.parentNode.remove();


 })
    
        // Appending main container with its child elements
        replyButtons[i].parentNode.appendChild(newDiv);
        replyButtons[i].parentNode.insertAdjacentElement('afterend', newDiv);
    })
}




 


// ***EDIT BUTTON HANDLING*** //
editButton.addEventListener("click", function(){
    // Hiding text div containing comment
    const textToEdit = document.querySelector(".commentContainer4 .comment");
    textToEdit.remove();

    // Creating new textarea i/o the div that contained the comment
    const newTextArea = document.createElement("textarea");
    newTextArea.classList.add("newTextarea");
    newTextArea.value = textToEdit.innerHTML;

    // Editing commentcontainer to contain the new textarea and sendbutton elements
    commentContainer4.style.gridTemplateColumns = "3rem auto auto";
    commentContainer4.style.gridTemplateRows = "repeat(3, auto)";

    // Update button creation
    const updateButton = document.createElement("button");
    updateButton.innerHTML = "UPDATE";
    updateButton.classList.add("updateButton");
    updateButton.style.alignSelf = "flex-end";

        // ***Update button functionality***
    updateButton.addEventListener("click", function(){
        makeHidden(updateButton);

        commentContainer4.style.gridTemplateColumns = "3rem auto auto";
        commentContainer4.style.gridTemplateRows = "repeat(2, auto)";
        const newDiv = document.createElement("div");
        newDiv.classList.add("comment");
        newDiv.innerHTML =newTextArea.value;
        newTextArea.remove();
        
        commentContainer4.appendChild(newDiv)
    })

    commentContainer4.appendChild(newTextArea);
    commentContainer4.appendChild(updateButton);
})

















