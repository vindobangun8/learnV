import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

export const store= new vuex.Store({
    state:{
        favouriteRest:[]
    },
    mutations:{
        addFavourite(state,payload){
            state.favouriteRest.push(payload);
        },
        removeFavourite(state,payload){
           
            state.favouriteRest = payload;
        }
    },
    actions:{
        addFavourite({commit},restaurant){
            commit('addFavourite',restaurant)
        },
        removeFavourite({commit,state},restaurant){
            let list = state.favouriteRest.filter(rest =>{
                return rest.id != restaurant.id
            })
            commit('removeFavourite',list)
        }
    }
    
})