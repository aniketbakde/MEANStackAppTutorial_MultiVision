var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	title: {
		type: String,
		required: '{PATH} is required!'
	},
	featured: {
		type: Boolean,
		required: '{PATH} is required!'
	},
	published: {
		type: Date,
		required: '{PATH} is required!'
	},
	tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
	Course.find({}).exec(function(err, collection) {
		if (collection.length === 0) {
			Course.create({
				title: 'C# for Sociopaths',
				featured: true,
				published: new Date(2015, 0, 1),
				tags: ['C#']
			});
			Course.create({
				title: 'C# for Non-Sociopaths',
				featured: true,
				published: new Date(2015, 1, 3),
				tags: ['C#']
			});
			Course.create({
				title: 'Super Duper Expert C#',
				featured: false,
				published: new Date(2015, 2, 12),
				tags: ['C#']
			});
			Course.create({
				title: 'Visual Basic for Visual Basic Developers',
				featured: false,
				published: new Date(2015, 3, 19),
				tags: ['VB']
			});
			Course.create({
				title: 'Pendantic C++',
				featured: true,
				published: new Date(2015, 4, 21),
				tags: ['C#']
			});
			Course.create({
				title: 'JavaScript for People over 20',
				featured: true,
				published: new Date(2015, 5, 16),
				tags: ['C++']
			});
			Course.create({
				title: 'Maintainable Code for Cowards',
				featured: true,
				published: new Date(2015, 6, 29),
				tags: ['JS']
			});
			Course.create({
				title: 'A Survival Guide to Code Reviews',
				featured: true,
				published: new Date(2015, 7, 8),
				tags: ['Coding']
			});
			Course.create({
				title: 'How to Job Hunt Without Alerting your Boss',
				featured: true,
				published: new Date(2015, 8, 18),
				tags: ['Coding']
			});
			Course.create({
				title: 'How to Keep your Soul and go into Management',
				featured: false,
				published: new Date(2015, 9, 25),
				tags: ['Misc']
			});
			Course.create({
				title: 'Telling Recruiters to Leave You Alone !!!',
				featured: false,
				published: new Date(2015, 10, 2),
				tags: ['Management']
			});
			Course.create({
				title: "Writing Code that Doesn't Suck",
				featured: true,
				published: new Date(2015, 11, 10),
				tags: ['Misc']
			});
			Course.create({
				title: 'Code Reviews for Jerks',
				featured: false,
				published: new Date(2016, 0, 31),
				tags: ['Coding']
			});
			Course.create({
				title: 'How to Deal with Narcissistic Coworkers',
				featured: true,
				published: new Date(2016, 1, 7),
				tags: ['Coding']
			});
			Course.create({
				title: 'Death March Coding for Fun and Profit',
				featured: true,
				published: new Date(2016, 2, 19),
				tags: ['Coding', 'Misc']
			});
		}
	});
}

exports.createDefaultCourses = createDefaultCourses;