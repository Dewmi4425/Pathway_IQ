function showDetails() {
    var selected = document.getElementById("milestoneSelect").value;
    var detailsBox = document.getElementById("detailsBox");
    var title = document.getElementById("detailTitle");
    var date = document.getElementById("detailDate");
    var marks = document.getElementById("detailMarks");
    var desc = document.getElementById("detailDesc");

    if (selected === "") { detailsBox.style.display = "none"; return; }
    detailsBox.style.display = "block";

    if (selected === "proposal") { title.innerText = "Proposal Presentation & Report"; date.innerHTML = "<strong>Deadline:</strong> 15th - 18th March 2026"; marks.innerHTML = "<strong>Marks Allocated:</strong> 12%"; desc.innerText = "Description: Submission and presentation of the initial project proposal outlining the research problem, objectives, and methodology."; } 
    else if (selected === "progress1") { title.innerText = "Progress Presentation I"; date.innerHTML = "<strong>Deadline:</strong> 11th - 13th May 2026"; marks.innerHTML = "<strong>Marks Allocated:</strong> 15%"; desc.innerText = "Description: First progress presentation to demonstrate the initial implementation and literature review."; }
    else if (selected === "progress2") { title.innerText = "Progress Presentation II"; date.innerHTML = "<strong>Deadline:</strong> 31st August - 02nd September 2026"; marks.innerHTML = "<strong>Marks Allocated:</strong> 18%"; desc.innerText = "Description: Second progress presentation focusing on the core implementation and research findings."; }
    else if (selected === "finalViva") { title.innerText = "Final Presentation and VIVA"; date.innerHTML = "<strong>Deadline:</strong> 19th - 21st October 2026"; marks.innerHTML = "<strong>Marks Allocated:</strong> 20%"; desc.innerText = "Description: Oral examination to defend the research project and demonstrate the website."; }
    else if (selected === "finalReport") { title.innerText = "Final Report"; date.innerHTML = "<strong>Deadline:</strong> 28th October 2026"; marks.innerHTML = "<strong>Marks Allocated:</strong> 19%"; desc.innerText = "Description: Final submission of the completed thesis document."; }
    else if (selected === "researchPaper") { title.innerText = "Research Paper (published)"; date.innerHTML = "<strong>Deadline:</strong> 23rd October 2026 (Submission) / 1st December 2026 (Evidence)"; marks.innerHTML = "<strong>Marks Allocated:</strong> 10%"; desc.innerText = "Description: Submission of the research paper and evidence of publication."; }
    else if (selected === "website") { title.innerText = "Website"; date.innerHTML = "<strong>Deadline:</strong> 11th October 2026 (Submission) / 19th - 21st October 2026 (Evaluation)"; marks.innerHTML = "<strong>Marks Allocated:</strong> 02%"; desc.innerText = "Description: Submission of the complete website source code and evaluation."; }
    else if (selected === "logbook") { title.innerText = "Research logbook, Status document 1 & 2"; date.innerHTML = "<strong>Deadline:</strong> 19th - 21st October 2026 (Logbook) / 13th May 2026 (Status Document)"; marks.innerHTML = "<strong>Marks Allocated:</strong> 04%"; desc.innerText = "Description: Submission of the research logbook and status documents."; }
}