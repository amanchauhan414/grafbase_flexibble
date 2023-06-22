type ProjectFormProps = {
	title: string,
	description: string,
	image: string,
	liveSiteUrl: string,
	githubUrl: string,
	category: string,
	creatorId?: string,
}

type UserFormProps = {
	name: string
	description: string
	githubUrl: string
	linkedinUrl: string
}

// export const createProjectMutation = (form: ProjectFormProps) => {
// 	return `mutation {
// 		projectCreate(input: {
// 			title: "${form.title}"
// 			description: "${form.description}"
// 			image: "${form.image}"
// 			liveSiteUrl: "${form.liveSiteUrl}"
// 			githubUrl: "${form.githubUrl}"
// 			category: "${form.category}"
// 			createdBy: {
// 				link: "${form.creatorId}"
// 			}
// 		}) {
// 			project {
// 				id
// 				title
// 				description
// 				createdBy {
// 					email
// 					name
// 				}
// 			}
// 		}
// 	}`
// }

// TODO: ALL OF THESE NEED TO BE CONVERTED TO USE VARIABLES.

export const createProjectMutation = `
	mutation CreateProject($input: ProjectCreateInput!) {
		projectCreate(input: $input) {
			project {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}`;

//varaible called id and then pass it into the by
export const updateProjectMutation = (form: ProjectFormProps, projectId: string) => {
	return `mutation {
		projectUpdate(by: {id: "${projectId}"}, input:  { title: "${form.title}", description: "${form.description}", image: "${form.image}", liveSiteUrl: "${form.liveSiteUrl}", githubUrl: "${form.githubUrl}", category: "${form.category}" }) {
			project {
			  category
			  description
			  title
			  liveSiteUrl
			  image
			  githubUrl
			  likes
			  id
			  createdBy {
				name
				id
				email
			  }
			}
		  }
	}`
}

export const deleteProjectMutation = (projectId: string) => {
	return `mutation {
		projectDelete(by: {id: "${projectId}"}) {
			deletedId
		  }
	}`
}

export const createUserMutation = (name: string, email: string, avatarUrl: string) => {
	return `mutation {
		userCreate(input: { name: "${name}", email: "${email}", avatarUrl: "${avatarUrl}" }) {
			user {
				name
				email
				avatarUrl
				description
				githubUrl
				linkedinUrl
				id
			}
		}
	}`
}

export const updateUserMutation = (form: UserFormProps, userId: string) => {
	return `mutation {
		userUpdate(by: {id: "${userId}"}, input: { name: "${form.name}", description: "${form.description}", githubUrl: "${form.githubUrl}", linkedinUrl: "${form.linkedinUrl}" }) {
			user {
			  githubUrl
			  linkedinUrl
			  name
			  email
			  id
			}
		  }
	}`
}