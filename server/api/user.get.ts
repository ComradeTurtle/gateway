export default defineEventHandler(() => {
	return {
		name: "ComradeTurtle",
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
	} as User;
});

interface User {
	name: string;
	avatar_url: string;
	social: UserSocial[];
}

interface UserSocial {
	icon: string;
	value: string;
	to: string;
	colors: UserSocialColors;
}

interface UserSocialColors {
	base: string;
	hover: string;
}
