<script>
    import PocketBase from  '/Users/youngbloodcyb/Projects/pocketbase-test/node_modules/pocketbase';
    import { goto } from '$app/navigation';
    import { userAuthData } from "../stores/user";

    const client = new PocketBase('http://127.0.0.1:8090');

    const login = async () => {
		const userAuth = await client.users.authViaEmail(state.email, state.password);
		userAuthData.set(userAuth);

		state.email = "";
		state.password = "";

        console.log($userAuthData);
        if (userAuth) {
            goto("/write");
        }
	} 

	let state = {
		email: "",
		password: ""
	}
</script>

<h1 class="text-lg">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form 
    action="login"
    method="post"
    on:submit|preventDefault={login}
	>
    <div>
        <input type="text" id="email" name="email" placeholder="email" required="" bind:value={state.email}>
        <label for="name">email</label>
    </div>
    <div>
        <input type="password" id="password" name="password" placeholder="password" required="" bind:value={state.password}>
        <label for="email">password</label>
    </div>
    <button type="submit">submit</button>
</form>
