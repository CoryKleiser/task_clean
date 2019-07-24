// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product

/*** Changes
 ES5 => ES6+
 Updated to use closures instead of making all functions global
 Created enumerations that return the userType/productType in plain english for readability
 Separated concerns by creating a separate function for product type price and rebate amount
 
 Improvements:
 One large improvement to my refactored code would be to update the enumerations to do something 
 more valuable. Currently they just serve to make the code more readable for the developer. Instead of that,
 maybe update the value to the rebate amount and then use that instead of checking
 in an if statement. This way when we want to update a rebate amount, for example, we could just 
 update the amount in the object instead of looking for the if statement in the function.
***/


const calculatePrice = (() => {

  // define user types
  const UserTypes = {
    0: 'normal',
    1: 'company'
  }

  // define product types
  const ProductTypes = {
    0: 'new',
    1: 'old'
  }

  /**
   * calculateRebate
   * @param {number} userType
   * @param {number} productType
   * @param {Date} publishedDate
   * @returns {number} rebate
   */
  const calculateRebate = (userType, productType, publishedDate) => {
    let rebate = 0;
    if (UserTypes[userType] == 'company') rebate += 5 // no need for triple equals because we no UserTypes are strings (no need for type casting)
    if (ProductTypes[productType] == 'new' && publishedDate.toDateString() == new Date().toDateString()) rebate += 10
    return rebate
  }

  /**
   * calculateProductTypePrice
   * @param {number} productType
   * @returns {number} productTypePrice
   */
  const calculateProductTypePrice = (productType) => ProductTypes[productType] == 'new' ? 25 : 35

  return (userType, productType, price, publishedDate) => {
    try	{
      const productPrice = calculateProductTypePrice(productType)
      const rebate = calculateRebate(userType, productType, publishedDate)
      return price + productPrice - rebate
    }	catch (ex)	{
      console.log(ex);
    }
  }
})()
