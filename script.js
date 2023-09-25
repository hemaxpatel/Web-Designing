// Sample data for study groups (replace with your own data)
const studyGroups = [
    {
      subject: "Mathematics",
      location: "Campus",
      date: "July 20, 2023",
      time: "3:00 PM - 5:00 PM",
      description: "Join us for a collaborative study session to prepare for the upcoming exam."
    },
    {
      subject: "Physics",
      location: "Online",
      date: "July 22, 2023",
      time: "4:00 PM - 6:00 PM",
      description: "Virtual study group to discuss advanced physics concepts."
    },
    // Add more study group objects as needed
  ];
  
  // Function to generate study group cards
  function generateGroupCards() {
    const groupContainer = document.getElementById("groupContainer");
    groupContainer.innerHTML = ""; // Clear existing group cards
    
    studyGroups.forEach(group => {
      const groupCard = document.createElement("div");
      groupCard.classList.add("group-card");
      
      groupCard.innerHTML = `
        <h4>${group.subject} Study Group</h4>
        <p><strong>Location:</strong> ${group.location}</p>
        <p><strong>Date:</strong> ${group.date}</p>
        <p><strong>Time:</strong> ${group.time}</p>
        <p><strong>Description:</strong> ${group.description}</p>
        <a href="#" class="btn">Join Group</a>
      `;
      
      groupContainer.appendChild(groupCard);
    });
  }
  
  // Event listener for search form submission
  document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve search input and location select values
    const searchInput = document.getElementById("searchInput").value;
    const locationSelect = document.getElementById("locationSelect").value;
    
    // Perform search/filter operations here using the searchInput and locationSelect values
    
    // Call the function to generate study group cards with the filtered results
    generateGroupCards();
  });
  
  // Initial generation of study group cards on page load
  generateGroupCards();
  