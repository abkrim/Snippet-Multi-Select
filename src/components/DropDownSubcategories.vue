<template>
		<dl id="subcategorias">
			<dt>
				<label class="control-label">SUBCATEGORÍAS</label>
			</dt>
			<dd>
				<multiselect v-model="value"
					track-by="id" label="name" selectLabel="Click para seleccionar" deselectLabel="" placeholder="Selecciona la subcategoría"
					:reset-after="false"
					:allow-empty="false"
					:searchable="true"
					:options="subCategories"
					@select="dispatchActionSubCategory">
				</multiselect>
			</dd>
		</dl>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    name: 'subcategories',
    props: ['subCategories'],
    components: {
      Multiselect
    },
    
    data() {
      return {
        value: [],
      }
    },

    methods: {
      dispatchActionSubCategory(actionName) {
        console.log(actionName);
      }
    },

    mounted: function () {
      console.log('SubCategories mounted.')
    },

    watch: {
      subCategories: function (newSubCategories) {
        this.value = [
          {
            id: 2,
            name: "Selecciona la categoría",
            parent_id: null,
            code: 99,
            additional: null
          }
        ]
      }
    }
  }
  
</script>

<style></style>
