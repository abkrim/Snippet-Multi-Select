<template>
	<div>
		<dl id="categories">
			<dt>
				<label class="control-label">CATEGORÍAS</label>
			</dt>
			<dd>
				<multiselect v-model="value"
   					track-by="id" label="name" selectLabel="Click para seleccionar" deselect-label=""
					:allow-empty="false"
					:searchable="true"
					:options="sortMainCategories"
					:reset-after="false"
					@select="dispatchActionCategory">
				</multiselect>
			</dd>
		</dl>
		<!-- <sub-categories v-if="showSubCategory" :subCategories="sortSubCategories"></sub-categories> -->
	</div>
</template>


<script>
  import Multiselect from 'vue-multiselect'
	import subcategories from './DropDownSubcategoriesComponent.vue'

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
          categories:[],
          showSubCategory: false
        }
      },

    
      methods: {
        this.showSubCategory = (actionName.id == 2) ? false : true;
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
