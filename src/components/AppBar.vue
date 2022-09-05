<template>
    <div>
        <v-card class="mx-auto overflow-hidden topBar">
            <v-app-bar color="#A03037" class="main-bar" fixed>
                <div class="book-icon">
                    <v-img class="book-icon" contain :src="require('../assets/education.svg')"></v-img>
                </div>
                <div class="book">
                    <v-toolbar-title class="row wrap white--text">BookStore</v-toolbar-title>
                </div>

                <div id="top-search-bar" v-on:keyup.enter="displayAllBooks">
                    <v-text-field class="mt-5 appBar" label="Search" prepend-inner-icon="mdi-magnify" autocomplete="off"
                        dense collaps solo v-model="search"></v-text-field>
                </div>
                <ul>
                    <div class="avatar">
                        <v-icon class="white--text account-icon">mdi-account-outline</v-icon>
                        <p id="bottom-name">prem</p>
                    </div>
                </ul>
                <div class="white--text avatar">
                    <v-img class="mt-4 mx-2 supermarket-icon white--text headline" contain
                        :src="require('../assets/supermarket.svg')">
                        {{ cartItemQuantity }}</v-img>
                    <span id="bottom-name-cart">Cart</span>
                </div>
                <v-badge id="counter" color="#A03037" :content="this.cartItemCounter"></v-badge>
            </v-app-bar>
        </v-card>
    </div>
</template>

<script>

export default {
    name: "AppBar",
    data: () => ({
        cartItemQuantity: "",
        cartItemCounter: 0,
        search: "",
        allBooks: [],
        filteredBooks: [],
        timeout: 3500,
    }),

};
</script>

<style >
.supermarket-icon {
    margin-left: 43px;
    min-height: 13px;
    min-width: 19px;
}

.title {
    font-size: 14px;
    font-weight: 15px;
    color: white;
    padding-left: -25px;
}

.avatar {
    justify-content: flex-end;
    margin-top: 1px;
    margin-left: 50px;
}

#top-search-bar {
    margin-right: 400px;
    width: 800px;
    padding-top: 5px;
    padding-left: 100px;
    
}

.main-bar {
    color: brown;
    width: 100%
}

.book-icon {
    margin-top: 1px;
    padding-right: 10px;
    margin-left: 0px;
    max-height: 60px;
    max-width: 60px;
}

.white {
    font-variant: normal;

}

#bottom-name {
    font-size: 11px;
    margin-bottom: -11px;
    color: white;
    padding-left: -1px;
}

#bottom-name-cart {
    font-size: 11px;
    margin-bottom: -21px;
    color: white;
    padding-left: 10px;
}

.prem {
    justify-content: flex-end;
    margin-top: 1px;
    margin-left: 200px;
}
.book{
    justify-content: flex-end;
    margin-top: 1px;
    margin-left: 5px;
}
</style>