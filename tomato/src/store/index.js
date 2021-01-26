import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

export const store= new vuex.Store({
    state:{ // setting state
        favouriteRest:[]
    },
    mutations:{ // changing state value
        addFavourite(state,payload){
            state.favouriteRest.push(payload);
        },
        removeFavourite(state,payload){
           
            state.favouriteRest = payload;
        }
    },
    actions:{ // for calling mutations
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