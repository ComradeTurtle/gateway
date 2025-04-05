<script setup lang="ts">
const user = ref({
	name: "Giorgos Karampitsakis",
	avatar_url: "https://avatars.githubusercontent.com/u/42468982?s=400&u=9a61aa8d3aeabb9484eea6a62909336926c91666&v=4",
	social: [
		{
			icon: "mdi:email",
			value: "giorgosd1300@shadowct.eu",
			to: "mailto:giorgosd1300@shadowct.eu",
			colors: {
				base: "text-primary-700",
				hover: "hover:text-primary-500",
			},
		},
		{
			icon: "mdi:github",
			value: "ComradeTurtle",
			to: "https://github.com/ComradeTurtle",
			colors: {
				base: "text-gray-500",
				hover: "hover:text-gray-400",
			},
		},
		{
			icon: "mdi:discord",
			value: "ComradeTurtle",
			to: "",
			colors: {
				base: "text-discord",
				hover: "hover:text-discord",
			},
		}
	],
});
	
const projects = ref([
	{
		name: "Thesstrans.com",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"A suite of applications developed for the thesstrans.com website.",
		links: [
			{
				name: "Gallery",
				icon: "mdi:web",
				to: "https://gallery.thesstrans.com",
				active: true,
			},
			{
				name: "Registry",
				icon: "mdi:web",
				to: "https://registry.thesstrans.com",
				active: true,
			},
			{
				name: "Interactive Map - OASTH",
				icon: "mdi:web",
				to: "https://oasthmap.comradeturtle.dev",
				active: true,
			},
			{
				name: "Interactive Map - OASA",
				icon: "mdi:web",
				to: "https://oasamap.comradeturtle.dev",
				active: true,
			},
		],
	},
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
		name: "Meteora-Weather",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"Meteora-Weather was a network of weather stations providing real-time weather, webcam and air quality data. The network consisted of 1 station in Thessaloniki and 2 in Athens.",
		links: [],
	},
	{
		name: "AS215734",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"My own ASN which I manage, created as a learning opportunity on routing, BGP, and advanced networking in general.",
		links: [
			{
				name: "bgp.tools",
				icon: "mdi:web",
				to: "https://bgp.tools/as/215734",
				active: true,
			},
			{
				name: "Looking Glass",
				icon: "mdi:magnify",
				to: "https://lg.as215734.net",
				active: true,
			},
		],
	},
	{
		name: "NTP Servers",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"Stratum 1 (GPS + PPS) chrony NTP servers maintained by me and some friends. They participate in the NTP Pool Project.",
		links: [
			{
				name: "Statistics Page",
				icon: "mdi:web",
				to: "https://ntp.comradeturtle.dev",
				active: true,
			},
			{
				name: "NTP Server 1",
				icon: "mdi:web",
				to: "https://www.ntppool.org/scores/44.32.63.52",
				active: true,
			},
			{
				name: "NTP Server 2",
				icon: "mdi:web",
				to: "https://www.ntppool.org/scores/81.2.191.169",
				active: true,
			},
			{
				name: "NTP Server 3",
				icon: "mdi:web",
				to: "https://www.ntppool.org/scores/81.2.191.34",
				active: true,
			}
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
		name: "NodeBOINC",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"A Node.js module that interfaces with local and remote BOINC Manager instances. It is currently work in progress and will be released soon™.",
		links: [
			{
				name: "GitHub Repository",
				icon: "mdi:github",
				to: "https://github.com/ComradeTurtle/nodeboinc",
				active: true,
			},
			{
				name: "NPM Package",
				icon: "mdi:npm-variant-outline",
				to: "https://www.npmjs.com/package/nodeboinc",
				active: true,
			}
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
	{
		name: "NEOSResolver",
		author: true,
		author_name: "ComradeTurtle",
		description:
			"NEOSResolver was a user and session lookup tool for the game NeosVR.",
		links: [
			{
				name: "Website",
				icon: "mdi:web",
				to: "https://neos.hgcommunity.net/",
				active: true,
			}
		],
	}
]);

useServerHead({
	title: "Gateway",
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon.png",
		},
	],
});

useHead({
	titleTemplate: "ComradeTurtle Gateway",
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon.png",
		},
	],
});

defineOgImage({
	component: "Pergel",
});
</script>

<template>
	<NuxtLoadingIndicator />
	<div class="gradient absolute inset-x-0 h-32" />
	<StructuresFlex is="main" column items="center" gap="8" class="z-10 h-screen p-4 lg:p-8 2xl:p-16">
		<StructuresFlex row justify="between" gap="4" class="w-full max-w-screen-md p-6">
			<StructuresFlex column items="center" gap="2">
				<UAvatar :src="user.avatar_url" :alt="user.name" size="6xl" />
				<h1 class="text-3xl font-bold">{{ user.name }}</h1>
			</StructuresFlex>
			<StructuresFlex column items="end" gap="2" class="relative">
				<StructuresFlex
					router
					:to="social.to"
					external
					row
					items="center"
					gap="2"
					v-for="social in user.social"
					class="transition-colors"
					:class="social.colors.hover"
				>
					<p>{{ social.value }}</p>
					<Icon :name="social.icon" size="2em" :class="social.colors.base" />
				</StructuresFlex>
			</StructuresFlex>
		</StructuresFlex>

		<StructuresFlex column gap="6" class="w-full max-w-screen-md overflow-y-auto p-6">
			<Project
				v-for="project in projects"
				:name="project.name"
				:description="project.description"
				:author="project.author"
			>
				<UTooltip v-for="link in project.links" :text="link.name">
					<ULink :to="link.to" external="" :aria-label="link.name">
						<Icon :name="link.icon" size="2em" class="hover:text-primary-500 transition-colors" />
					</ULink>
				</UTooltip>
			</Project>
		</StructuresFlex>
	</StructuresFlex>
</template>

<style lang="scss">
* {
	min-width: 0;
}

body {
	@apply relative overflow-y-auto bg-gray-950 font-poppins text-white;
}

.gradient {
	background: linear-gradient(
		152.92deg,
		rgba(var(--color-primary-500) / 0.2) 4.54%,
		rgba(var(--color-primary-600) / 0.26) 34.2%,
		rgba(var(--color-primary-700) / 0.1) 77.55%
	);
	filter: blur(118px);
}
</style>
