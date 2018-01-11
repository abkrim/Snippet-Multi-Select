<template>
	<div class="row">
    <div class="col-lg-1 col-centered">
      <dl id="categories">
        <dt>
          <label class="control-label">CATEGORÍAS</label>
        </dt>
        <dd>
          <multiselect v-model="value"
            track-by="id" label="name" 
            selectLabel="Click para seleccionar" 
            deselect-label=""
            :allow-empty="false"
            :searchable="true"
            :options="sortMainCategories"
            :reset-after="false"
            @select="dispatchActionCategory">
          </multiselect>
        </dd>
      </dl>
      <sub-categories v-if="showSubCategory" :subCategories="sortSubCategories"></sub-categories>
    </div>
  </div>
</template>


<script>
  import Multiselect from 'vue-multiselect'
	import subcategories from './DropDownSubcategories.vue'
  import json from './data.json'


    export default {
    	name: 'categories',
		  components: {
			  Multiselect,
		    'sub-categories': subcategories
		  },
      data() {
        return {
          value: [
            {
              id: 2,
              name: "Todos los anuncios",
              parent_id: null,
              code: 99,
              additional: null
            }
          ],
          /*
          categories: [
            {
              id: 1,
              name: "OOOh",
              parent_id: null,
              code: 0,
              additional: null
            }
          ],
          */
          categories: json,
          showSubCategory: false
        }
      },

    
      methods: {
        dispatchActionCategory(actionName) {
          this.showSubCategory = (actionName.id == 2) ? false : true;
        }
      },  

      computed: {
        sortMainCategories: function () {
          var categories = this.categories.filter(c => (c.parent_id === 0 || c.code === 99));
          return _.orderBy(categories, 'name')
        },
        sortSubCategories: function () {
          var subCategories = this.categories.filter(c => (c.parent_id === this.value.code));
          return _.orderBy(subCategories, 'name')
        }
      },
      mounted: function() {
              console.log('DropDownCategories mounted.')
          }
      }
</script>

<style>

</style>
