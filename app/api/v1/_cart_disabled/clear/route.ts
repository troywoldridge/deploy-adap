// app/api/v1/cart/clear/route.ts

export async function GET(request: Request) {
  // Logic for clearing the cart with a GET request (if applicable)
  try {
    // Add your logic here, for example:
    // const cart = await getCartFromSession(request); // Retrieve cart from session
    // clearCart(); // Clear the cart data

    return new Response(JSON.stringify({ message: "Cart cleared successfully" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to clear cart" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  // Logic for clearing the cart with a POST request (if applicable)
  try {
    // Similar logic can be added here if you want to handle POST as well

    return new Response(JSON.stringify({ message: "Cart cleared successfully" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to clear cart" }), {
      status: 500,
    });
  }
}
