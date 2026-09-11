export default function handler(req, res) {
    res.status(200).json({
        success: true,
        user: [
            { id: 1, name: "Rohit" },
            { id: 2, name: "Ayan" },
            { id: 3, name: "Rahim" }
        ]
    });
}