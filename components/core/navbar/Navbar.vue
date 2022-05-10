<template>
    <div class="w-full bg-white h-16 md:h-20 flex justify-end items-center">
        <img 
            style="margin-right: auto" 
            class="h-12 md:h-full" 
            src="/img/space.webp" 
            alt="">
        <p
            v-text="userName"
            class="mr-2" />
        <span class="inline-block rounded-full overflow-hidden bg-gray-100 mr-4">
            <svg
                v-if="!isUserLoggedIn" 
                class="h-12 md:h-16 text-gray-300" 
                fill="currentColor" 
                viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <img 
                v-if="!!isUserLoggedIn"
                class="h-12 md:h-16 rounded-full" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="" />
        </span>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

    data () {
        return {
            isUserLoggedIn: false,
            user: {
                name: 'User Name'
            }
        }
    },

    props: {
        userObject: {
            type: Object,
            required: false
        }
    },

    computed: {
        userName () {
            if (this.isUserLoggedIn) {
                return this.user.name
            }
        }
    }
}
</script>