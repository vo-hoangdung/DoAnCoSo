const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const modelProduct = require("../models/products.model");

async function askQuestion(question) {
    try {
        const products = await modelProduct.findAll({});

        const productData = products
            .map(
                (product) =>
                    `Tên: ${product.name}, Giá: ${
                        product.discount > 0
                            ? product.price - (product.price * product.discount) / 100
                            : product.price
                    }`
            )
            .join("\n");

        const prompt = `
Bạn là một trợ lý bán hàng chuyên nghiệp.

Đây là danh sách sản phẩm hiện có trong cửa hàng:
${productData}

Câu hỏi của khách hàng:
${question}

Hãy trả lời một cách tự nhiên và thân thiện.
`;

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 1024,
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Groq Error:", error);
        throw error;
    }
}

module.exports = { askQuestion };