const main = document.querySelector("#main");

document.getElementById("addBtn").addEventListener('click',
    function(){
        addNote();
    }
)
// <!-- <div class="note">
//             <div class="tool">
//                 <i class="fas fa-trash"></i>
//                 <i class="fas fa-save"></i>
//             </div>
//             <textarea></textarea>
        // </div> -->

        // Add nottes on screen
function addNote(text=""){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tool">
    <i class="save fas fa-save"></i>
    <i class=" trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>`;

    note.querySelector('.trash').addEventListener('click', 
        function(){
            note.remove();
            saveNotes();
        }
    )

    note.querySelector('.save').addEventListener('click',
        function(){
            saveNotes();
        }
    )

    note.querySelector('textarea').addEventListener('focusout',
        function(){
            saveNotes();
        }
    )

    main.appendChild(note)
    saveNotes();
}

// To save notes in to local storage
function saveNotes(){
    const notes = document.querySelectorAll('.note textarea')
    // console.log(notes);
    const data = [];
    notes.forEach(
        function(note){
            data.push(note.value);
        }
    )
    // console.log(data);
    localStorage.setItem("notes", JSON.stringify(data))
}

// Show previos saved notes on screen
(
    function(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    lsNotes.forEach(
        function(lsNotes){
            addNote(lsNotes);
        }
    )
}
)();