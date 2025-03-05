document.addEventListener('DOMContentLoaded', function() {
  // Data
  const verses = [
    {
      num: 11,
      text: "Then God said, \"Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds.\" And it was so.",
      insights: [
        "\"According to their kinds\" emphasizes the orderliness and diversity of creation",
        "Plant reproduction through seeds establishes a self-sustaining natural order",
        "This is the first appearance of life in the creation account"
      ]
    },
    {
      num: 12,
      text: "The land produced vegetation: plants bearing seed according to their kinds and trees bearing fruit with seed in it according to their kinds. And God saw that it was good.",
      insights: [
        "The text emphasizes God's indirect creation method here - \"the land produced\" rather than \"God created\"",
        "This suggests God empowers creation itself to be productive and generative",
        "The repetition of \"according to their kinds\" emphasizes the boundaries between different plant species"
      ]
    },
    {
      num: 13,
      text: "And there was evening, and there was morning—the third day.",
      insights: [
        "This completes day three, which included both the formation of dry land and the creation of vegetation",
        "Day three is uniquely productive - containing two distinct creative acts",
        "This prepares for the parallel structure where day six will also contain two distinct creative acts (animals and humans)"
      ]
    },
    {
      num: 14,
      text: "And God said, \"Let there be lights in the vault of the sky to separate the day from the night, and let them serve as signs to mark sacred times, and days and years,\"",
      insights: [
        "The Hebrew word for \"lights\" (מְאֹרֹת, me'orot) is different from the word for \"light\" in verse 3",
        "These lights serve practical functions: separating day/night and marking time",
        "The purpose statement \"to serve as signs\" establishes that celestial bodies have a function for human benefit"
      ]
    },
    {
      num: 15,
      text: "\"and let them be lights in the vault of the sky to give light on the earth.\" And it was so.",
      insights: [
        "This reiterates the functional role of the sun, moon, and stars - they exist to illuminate the earth",
        "The phrase \"And it was so\" confirms the immediate fulfillment of God's command",
        "Note that light existed before these light-bearers, emphasizing God as the ultimate source of light"
      ]
    },
    {
      num: 16,
      text: "God made two great lights—the greater light to govern the day and the lesser light to govern the night. He also made the stars.",
      insights: [
        "The text deliberately avoids using the common names \"sun\" and \"moon\" to de-emphasize their deity status in ancient cultures",
        "The Hebrew term for \"made\" (וַיַּעַשׂ, ya'as) suggests arrangement or appointment rather than initial creation",
        "The stars are mentioned almost as an afterthought, contrasting with other ancient cosmologies that emphasized them"
      ]
    },
    {
      num: 17,
      text: "God set them in the vault of the sky to give light on the earth,",
      insights: [
        "The verb \"set\" (וַיִּתֵּן, yitten) literally means \"to give\" or \"to appoint,\" emphasizing their assigned function",
        "This reinforces the idea of the firmament (רָקִיעַ, raqia) as a solid dome in ancient cosmology",
        "Their primary purpose is again stated as giving light to the earth, emphasizing earth as the focus of creation"
      ]
    },
    {
      num: 18,
      text: "to govern the day and the night, and to separate light from darkness. And God saw that it was good.",
      insights: [
        "The concept of \"governing\" (לִמְשֹׁל, limshol) establishes authority without deifying these celestial bodies",
        "The repetition of separating light from darkness connects back to God's first creative act on day one",
        "The evaluation formula \"God saw that it was good\" confirms the proper ordering of these celestial objects"
      ]
    },
    {
      num: 19,
      text: "And there was evening, and there was morning—the fourth day.",
      insights: [
        "This completes the day formula pattern established in previous days",
        "Day four corresponds to day one in the parallel structure of the creation week",
        "The placement of sun, moon, and stars on day four challenges ancient cosmologies that saw these as primary deities"
      ]
    },
    {
      num: 20,
      text: "And God said, \"Let the water teem with living creatures, and let birds fly above the earth across the vault of the sky.\"",
      insights: [
        "The Hebrew phrase \"teem with\" (יִשְׁרְצוּ, yishretzu) suggests abundant, swarming life",
        "This begins day five and the second phase of creation - filling the spaces formed in days 1-3",
        "These creatures fill the waters and sky created on day two"
      ]
    },
    {
      num: 21,
      text: "So God created the great creatures of the sea and every living thing with which the water teems and that moves about in it, according to their kinds, and every winged bird according to its kind. And God saw that it was good.",
      insights: [
        "The term for \"great creatures\" (הַתַּנִּינִם, hatanninim) could refer to large sea creatures or sea monsters",
        "This is the first use of the verb \"created\" (בָּרָא, bara) since verse 1, possibly emphasizing the significance of animated life",
        "The phrase \"according to their kinds\" appears again, establishing the same boundaries for animals as for plants"
      ]
    }
  ];

  const themes = [
    {
      title: "Order and Classification",
      content: "Genesis 1:11-21 emphasizes the orderly nature of creation through the repeated phrase \"according to their kinds.\" This establishes both diversity and boundaries within creation, suggesting that God's creative work involves establishing meaningful distinctions and categories."
    },
    {
      title: "Function and Purpose",
      content: "Each created element is assigned a specific function: plants produce seeds, celestial bodies mark time and provide light. This teaches that creation is not random but purposeful, with each element designed to fulfill a specific role in God's ordered cosmos."
    },
    {
      title: "Demythologization",
      content: "The text deliberately avoids naming the sun and moon directly and presents them as created objects with specific functions rather than deities. This challenges ancient Near Eastern religious systems that worshipped celestial bodies and presents a radically different view of creation."
    },
    {
      title: "Self-Sustaining Systems",
      content: "The mention of plants bearing seeds establishes a self-perpetuating natural system. This suggests that God's creation includes natural processes that continue His creative work, showing how divine sovereignty works through natural mechanisms."
    }
  ];

  const connections = [
    {
      title: "Psalm 104:14-19",
      content: "\"He makes grass grow for the cattle, and plants for people to cultivate... The moon marks off the seasons, and the sun knows when to go down.\" This psalm elaborates on the purposeful nature of vegetation and celestial bodies described in Genesis 1:11-21."
    },
    {
      title: "Jeremiah 31:35-36",
      content: "\"This is what the LORD says, he who appoints the sun to shine by day, who decrees the moon and stars to shine by night... 'If this fixed order were to cease from before me,' declares the LORD, 'then Israel would cease being a nation before me.'\" This passage connects God's reliable ordering of celestial bodies to His covenant faithfulness."
    },
    {
      title: "Romans 1:20",
      content: "\"For since the creation of the world God's invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made.\" Paul suggests that the ordered nature of creation as described in Genesis 1 reveals God's character."
    },
    {
      title: "Colossians 1:16-17",
      content: "\"For in him all things were created: things in heaven and on earth, visible and invisible... all things have been created through him and for him. He is before all things, and in him all things hold together.\" This New Testament passage attributes the creation described in Genesis to Christ and emphasizes his continuing role in sustaining creation."
    }
  ];

  // Populate verses
  const versesContainer = document.getElementById('verses-container');
  verses.forEach(verse => {
    const verseDiv = document.createElement('div');
    verseDiv.className = 'verse-item';
    verseDiv.innerHTML = `
      <span class="verse-num">${verse.num}</span>
      <p class="verse-text">${verse.text}</p>
      <div class="verse-insights">
        <h4 class="insights-title">Key Insights:</h4>
        <ul class="insights-list">
          ${verse.insights.map(insight => `<li>${insight}</li>`).join('')}
        </ul>
      </div>
    `;
    versesContainer.appendChild(verseDiv);

    // Add click event to toggle insights
    verseDiv.addEventListener('click', function() {
      const insights = this.querySelector('.verse-insights');
      insights.classList.toggle('active');
    });
  });

  // Populate themes
  const themesContainer = document.getElementById('themes-container');
  themes.forEach(theme => {
    const themeDiv = document.createElement('div');
    themeDiv.className = 'theme-card';
    themeDiv.innerHTML = `
      <h3 class="theme-title">${theme.title}</h3>
      <p>${theme.content}</p>
    `;
    themesContainer.appendChild(themeDiv);
  });

  // Populate connections
  const connectionsContainer = document.getElementById('connections-container');
  connections.forEach(connection => {
    const connectionDiv = document.createElement('div');
    connectionDiv.className = 'connection-card';
    connectionDiv.innerHTML = `
      <h3 class="connection-title">${connection.title}</h3>
      <p>${connection.content}</p>
    `;
    connectionsContainer.appendChild(connectionDiv);
  });

  // Tab switching
  const tabButtons = document.querySelectorAll('.tab-button');
  const contentSections = document.querySelectorAll('.content-section');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Hide all content sections
      contentSections.forEach(section => section.classList.remove('active'));
      
      // Show corresponding content section
      const tabId = this.id.replace('tab-', '');
      document.getElementById(`${tabId}-content`).classList.add('active');
    });
  });
});