const stripe = Stripe("pk_test_51OKqCHE9VPfeCGyPokUHNZA4GOB9xnazsY0wik9XYtKAsFmhxo4tcCs3oeFcjHlDxuMmYAfIKBZlU8jCtCppZvzn008T27JVpF");

let clientSecret = document.querySelector('#checkout').getAttribute('data-client-secret');

initialize();

async function initialize() 
{
    const checkout = await stripe.initEmbeddedCheckout({clientSecret});

    checkout.mount('#checkout');
}