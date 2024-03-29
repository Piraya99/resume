// Handlebars Templates

const context = {

	socialmedias: [
		{
			name: 'github',
			link: 'https://github.com/piraya99',
			path1: 'M224,0C100.3,0,0,102.8,0,229.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8C82.5,340.1,67.8,333,67.8,333c-20.3-14.3,1.5-14,1.5-14c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C383.9,417.1,448,331.1,448,229.7C448,102.8,347.7,0,224,0z'
		},
		{
			name: 'behance',
			link: 'https://www.behance.net/pirayaspk',
			path1: 'M191.32,267.878h-46.3v50.687h46.3a25.344,25.344,0,1,0,0-50.687Z',
			path2: 'M212.622,212.989A23.924,23.924,0,0,0,188.7,189.064l-.1-.055-.022.055H145.023v47.85H188.7A23.925,23.925,0,0,0,212.622,212.989Z',
			path3: 'M334.578,240.281a30.557,30.557,0,0,0-30.339,26.928h60.679A30.557,30.557,0,0,0,334.578,240.281Z',
			path4: 'M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM203.344,349.528h-94.8V158.1h91.9a48.7,48.7,0,0,1,22.265,92.007,51.6,51.6,0,0,1-19.368,99.42Zm84.3-180.255h92.87v22.8h-92.87ZM400.986,292.137H304.542q-.022.612-.023,1.229a31.517,31.517,0,0,0,58.73,15.9l.064.037h36.85c-9.006,30.666-35.887,44.447-65.2,44.447-38.812,0-67.687-32.007-67.687-71.489s28.875-71.489,67.687-71.489S407.876,244.105,400.986,292.137Z'
		},
		{
			name: 'linkedin',
			link: 'https://www.linkedin.com/in/pirayasanpakij',
			path1: 'M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM183.435,382.667H126.381V203.653h57.054ZM154.908,180.208a32.1,32.1,0,1,1,32.1-32.1A32.1,32.1,0,0,1,154.908,180.208ZM389.2,382.667h-56l0-97.882c0-4.973.785-37.949-27.219-37.949a30.948,30.948,0,0,0-25.681,12.576,39.134,39.134,0,0,0-7.818,23.8v99.451H216.55V203.653h53.216v25.124c12.737-19.541,28.789-26.694,44.578-29.573,28.027-5.11,74.851,11.952,74.851,62.9Z'
		},
		{
			name: 'instagram',
			link: 'https://www.instagram.com/pirayaspk',
			path1: 'M314.757,147.525H197.243a49.717,49.717,0,0,0-49.718,49.718V314.757a49.718,49.718,0,0,0,49.718,49.718H314.757a49.718,49.718,0,0,0,49.717-49.718V197.243A49.717,49.717,0,0,0,314.757,147.525ZM256,324.391A68.391,68.391,0,1,1,324.391,256,68.391,68.391,0,0,1,256,324.391ZM327.242,201.58a16.271,16.271,0,1,1,16.27-16.271A16.271,16.271,0,0,1,327.242,201.58Z',
			path2: 'M256,211.545A44.455,44.455,0,1,0,300.455,256,44.455,44.455,0,0,0,256,211.545Z',
			path3: 'M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM389.333,312.5A76.836,76.836,0,0,1,312.5,389.333H199.5A76.837,76.837,0,0,1,122.666,312.5V199.5A76.836,76.836,0,0,1,199.5,122.667H312.5A76.836,76.836,0,0,1,389.333,199.5Z'
		}
	],

	experiences: [
		{
			title:'Freelance Graphic Designer',
			place:'Reflexe Cycles / Perf Master (France)',
			start:'Oct 2022 -',
			end:'Now'
		},
		{
			title:'Webmarketing Manager',
			place:'Jet Graphix (Nantes, France)',
			start:'Sep 2020 -',
			end:'Sep 2022'
		},
		{
			title:'IN-HOUSE Graphic Designer',
			place:'Flat Agency Corp. (Kyoto, Japan)',
			start:'Apr 2016 -',
			end:'Mar 2018'
		},
		{
			title:'Assisntant UI & UX Designer',
			place:'ADDD-Link Co.,Ltd  (Kyoto, Japan)',
			start:'Nov 2015 -',
			end:'Mar 2016'
		},
	],

	educations: [
		{
			title:'Front-end Web Development',
			place:'Codecademy',
			start:'May 2023 -',
			end:'Now'
		},
		{
			title:'MBA 2 Digital Marketing Expert',
			place:'My Digital School (Saint-Herblain, France)',
			start:'Sep 2020 -',
			end:'Aug 2022'
		},
		{
			title:'Management & Entrepreneurship',
			title2: 'in the Creative Economy',
			place:'Audencia Business School (Nantes, France)',
			start:'Sep 2018 -',
			end:'Feb 2020'
		},
		{
			title:'B.A. In Communication Design',
			place:'Kyoto University of Art and Design (Japan)',
			start:'Apr 2012 -',
			end:'Mar 2016'
		}
	],

	projects: [
		{
			title: 'Queue Free',
			subtitle: 'Mobile Application Design',
			src: './img/project/project1-thumb.png',
			link: ''
		},
		{
			title: 'Home Switch Home',
			subtitle: 'Exchange Platform Design',
			src: './img/project/project2-thumb.jpg',
			link: ''
		},
		{
			title: 'Astromania',
			subtitle: 'E-commerce Website',
			src: './img/project/project3-thumb.jpg',
			link: ''
		},
		{
			title: 'Maynooth',
			subtitle: 'E-commerce Interface Design',
			src: './img/project/project4-thumb.jpg',
			link: ''
		},
		{
			title: 'Château de la Rousselière',
			subtitle: 'UI & UX Design',
			src: './img/project/project5-thumb.jpg',
			link: ''
		},
		{
			title: 'Focal Design',
			subtitle: 'Web Creation with Elementor',
			src: './img/project/project6-thumb.jpg',
			link: ''
		},
	]
};

// Social Media Template
const templateHB1 = document.getElementById("templateHB1");
const templateSource1 = templateHB1.innerHTML;
const template1 = Handlebars.compile(templateSource1);
const compiledHtml1 = template1(context);
document.getElementById("socialmedia").innerHTML = compiledHtml1;

// Experience Template
const templateHB2 = document.getElementById("templateHB2");
const templateSource2 = templateHB2.innerHTML;
const template2 = Handlebars.compile(templateSource2);
const compiledHtml2 = template2(context);
document.getElementById("experiences").innerHTML = compiledHtml2;

// Education Template
const templateHB3 = document.getElementById("templateHB3");
const templateSource3 = templateHB3.innerHTML;
const template3 = Handlebars.compile(templateSource3);
const compiledHtml3 = template3(context);
document.getElementById("educations").innerHTML = compiledHtml3;

// Project Template
const templateHB4 = document.getElementById("templateHB4");
const templateSource4 = templateHB4.innerHTML;
const template4 = Handlebars.compile(templateSource4);
const compiledHtml4 = template4(context);
document.getElementById("projects").innerHTML = compiledHtml4;

// Change Language
let bioSubtitle = document.getElementById('bioSubtitle');
bioSubtitle.innerHTML = 'Graphiste qui code';
