import { D1Database } from "@cloudflare/workers-types";

const projects: Project[] = [
	{
		name: "apousies.gr",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"The aim of the apousies.gr project was to organize the daily procedures that directly concern all students such as performance, absences and their schedule. It attended and was presented at the 15th Annual Computer Science Student Conference.",
		links: [
			{
				name: "Conference Proposal",
				icon: "mdi:file-document-multiple-outline",
				to: "https://zipline.comradeturtle.dev/go/apousies_proposal",
				active: true,
			},
			{
				name: "Conference Presentation",
				icon: "mdi:file-powerpoint-outline",
				to: "https://zipline.comradeturtle.dev/go/apousies_presentation",
				active: false,
			},
		],
	},
	{
		name: "Thesstrans.com Gallery & Interactive Map",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"A pair of applications developed for the thesstrans.com website.",
		links: [
			{
				name: "Gallery",
				icon: "mdi:web",
				to: "https://gallery.thesstrans.com",
				active: true,
			},
			{
				name: "Interactive Map",
				icon: "mdi:web",
				to: "https://oasthmap.comradeturtle.dev",
				active: false,
			},
		],
	},
	{
		name: "Ham Radio",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"A Website that allows ham radio license candidates in Greece to practice for their exams. Follows the ministry's official curriculum and testing format.",
		links: [
			{
				name: "Website",
				icon: "mdi:web",
				to: "https://hamradio.comradeturtle.dev/",
				active: true,
			},
			{
				name: "GitHub Repository",
				icon: "mdi:github",
				to: "https://github.com/ComradeTurtle/hamradio-frontend",
				active: true,
			},
		],
	},
	{
		name: "IPv6 Ready",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"A simple website that offers IPv6 and IPv4 connectivity testing.",
		links: [
			{
				name: "Website",
				icon: "mdi:web",
				to: "https://ipv6ready.comradeturtle.dev/",
				active: true,
			},
		],
	},
	{
		name: "PlateResolver",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"Very small web application for resolving Greek license plates to the registration prefecture.",
		links: [
			{
				name: "Website",
				icon: "mdi:web",
				to: "https://plates.comradeturtle.dev/",
				active: true,
			},
			{
				name: "GitHub Repository",
				icon: "mdi:github",
				to: "https://github.com/ComradeTurtle/plateresolver",
				active: true,
			},
		],
	},
	{
		name: "NodeBOINC",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"A Node.js module that interfaces with local and remote BOINC Manager instances. It is currently work in progress and will be released soon™.",
		links: [
		],
	},
	{
		name: "PrimeGrid Challenge Statistics",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"A website for showing challenge standings and statistics for the PrimeGrid BOINC project.",
		links: [
			{
				name: "Website",
				icon: "mdi:web",
				to: "https://pg.comradeturtle.dev/",
				active: true,
			},
			{
				name: "GitHub Repository",
				icon: "mdi:github",
				to: "https://github.com/ComradeTurtle/pgstat",
				active: true,
			},
		],
	},
];

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const context = event.context;
	const isCloudflare = "cloudflare" in context;

	let results;
	if (isCloudflare) {
		const database: D1Database = context.cloudflare.env.DATABASE;
		results = await database
			.prepare("SELECT name, author, author_name, description, json(links) as links FROM Projects")
			.run();
	} else if (config.public.usesExternalAPI) {
		if (!config.public.externalAPIAddress) {
			createError({
				name: "Fetching Data",
				cause: "externalAPIAddress is not valid",
				statusCode: 500,
			});
		} else {
			const response = await fetch(config.public.externalAPIAddress?.toString());
			results = await response.json();
		}
	} else {
		results = projects;
	}

	return results;
});

interface Project {
	name: string;
	author: boolean;
	author_name: string;
	description: string;
	links: ProjectLinks[];
}

interface ProjectLinks {
	name: string;
	icon: string;
	to: string;
	active: boolean;
}
