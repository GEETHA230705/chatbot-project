def get_bot_response(message):
    message = message.lower()
    if "refund" in message:
        return "Sure! Please provide your order number for the refund process."
    elif "shipping" in message:
        return "Shipping usually takes 3-5 business days."
    elif "deliver" in message:
        return "Delivered in 5-7 days."
    elif "damage" in message or "issue"  in message:
        return "I'm sorry for the inconvenience. Could you please describe the issue?"
    elif "break" in message:
        return "You will exchange your product."
    elif "cancel" in message:
        return "Your order is cancel."
    else:
        return "Thank you for contacting us! A customer support agent will assist you shortly."
