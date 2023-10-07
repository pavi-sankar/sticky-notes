
const add_note = document.querySelector("#add-note");

        add_note.addEventListener("click", display);
        const noteColors = ["#fff8e1", "#b76e79", "#68c3d4", "#c3c6e3", "#a5d6a7"];
        let currentColorIndex = 0;

        function display() {
            const wrapper = document.querySelector(".wrapper");
            
            const existingNotes = document.querySelectorAll(".note");
            
            const hasEmptyNote = Array.from(existingNotes).some(note => note.value.trim() === '');
            
            if (!hasEmptyNote) {
                const notes = document.createElement("textarea");

                notes.className = "note";
                wrapper.appendChild(notes);
                wrapper.appendChild(add_note);

                notes.style.backgroundColor = noteColors[currentColorIndex];
                currentColorIndex = (currentColorIndex + 1) % noteColors.length;

                notes.setAttribute("maxlength", 300);

                notes.addEventListener("dblclick", dt);

                function dt() {
                    notes.remove();
                }
            } else {
                alert("You cannot add a new note when an empty note is present.");
            }
        }