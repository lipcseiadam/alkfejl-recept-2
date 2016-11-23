function parseIngredients(text){
    return text.split('\n').map(line => {
        const index = line.indexOf(' ')
        const amount = line.substr(0, index)
        const name = line.substr(index+1)
        return { amount, name }
    })
}

function inserIngredientRow(ingredient, $textarea){
    const $row = $(`
        <div class="form-group smart-ingredient">
            <div class="col-md-3">
                <input required class="form-control smart-ingredient-amount" value="${ingredient.amount}" type="text" 
                    pattern="^\\S*$"
                    placeholder="1kg"
                >
                <span class="help-block">Nincs szóköz</span>
            </div>
            <div class="col-md-7">
                <input required class="form-control smart-ingredient-name" value="${ingredient.name}" type="text">
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-danger btn-block">
                    <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        `)

    const $removeButton = $row.find('button')
    $removeButton.on('click', function (e){
        $(this).closest('.smart-ingredient').remove
    })

    $row.insertBefore($textarea)
}

function collectIngredients(){
    const ingredients = []
    $(' ,smart-ingredient').each(function (){
        $this = $(this)
        const amount = $this.find('.smart-ingredient-amount').val() 
        const name = $this.find('.smart-ingredient-name').val() 
        ingredients.push({ amount, name })
    })
    return ingredients
        //.map(ingredient => `${ingredient.amount} ${ingredient.name}`)
        .map(({amount, name}) `${amount} ${name}`)
        .join('\n')
}

const $textarea = $('#ingredients')
$textarea.hide()

const ingredients = paresIngredients($textarea.val())

ingredients.forEach(ingredient =>inserIngredientRow(ingredietn, $textarea) )

$addButton = $(`
        <button type="button" class="btn btn-success btn-block">
        <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        </button>
    `).InstertAfter($textarea)
    .on('click', function (e) {
        inserIngredientRow({ 
            amount: '', 
            name: ''
        }, 
            $textarea)
    })

$('form').on('submit', function (e){
    //e.preventDefault()
    $textarea.val(collectIngredients())
})
