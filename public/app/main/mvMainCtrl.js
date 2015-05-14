angular.module('app').controller('mvMainCtrl', function($scope) {
	$scope.courses = [{
		name: 'C# for Sociopaths',
		featured: true,
		published: new Date(2015, 0, 1)
	}, {
		name: 'C# for Non-Sociopaths',
		featured: true,
		published: new Date(2015, 1, 3)
	}, {
		name: 'Super Duper Expert C#',
		featured: false,
		published: new Date(2015, 2, 12)
	}, {
		name: 'Visual Basic for Visual Basic Developers',
		featured: false,
		published: new Date(2015, 3, 19)
	}, {
		name: 'Pendantic C++',
		featured: true,
		published: new Date(2015, 4, 21)
	}, {
		name: 'JavaScript for People over 20',
		featured: true,
		published: new Date(2015, 5, 16)
	}, {
		name: 'Maintainable Code for Cowards',
		featured: true,
		published: new Date(2015, 6, 29)
	}, {
		name: 'A Survival Guide to Code Reviews',
		featured: true,
		published: new Date(2015, 7, 8)
	}, {
		name: 'How to Job Hunt Without Alerting your Boss',
		featured: true,
		published: new Date(2015, 8, 18)
	}, {
		name: 'How to Keep your Soul and go into Management',
		featured: false,
		published: new Date(2015, 9, 25)
	}, {
		name: 'Telling Recruiters to Leave You Alone !!!',
		featured: false,
		published: new Date(2015, 10, 2)
	}, {
		name: "Writing Code that Doesn't Suck",
		featured: true,
		published: new Date(2015, 11, 10)
	}, {
		name: 'Code Reviews for Jerks',
		featured: false,
		published: new Date(2016, 0, 31)
	}, {
		name: 'How to Deal with Narcissistic Coworkers',
		featured: true,
		published: new Date(2016, 1, 7)
	}, {
		name: 'Death March Coding for Fun and Profit',
		featured: true,
		published: new Date(2016, 2, 19)
	}]
});