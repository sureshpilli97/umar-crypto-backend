import express from "express";
import supabase from "./db.js";
import axios from "axios";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

let stocksData = [];
async function convertToInrList(data) {
    const resultList = [];
    for (const key in data) {
        if (key.includes("inr")) {
            const entry = data[key];

            // Convert and format numeric fields to three decimal places
            const formattedEntry = {
                ...entry,
                low: parseFloat(entry.low).toFixed(3),
                high: parseFloat(entry.high).toFixed(3),
                last: parseFloat(entry.last).toFixed(3),
                open: parseFloat(entry.open).toFixed(3),
                sell: parseFloat(entry.sell).toFixed(3),
                buy: parseFloat(entry.buy).toFixed(3),
                volume: 0, // Optionally format volume if needed
            };

            resultList.push(formattedEntry);

            try {
                const { data: insertedData, error } = await supabase
                    .from("stock")
                    .insert(formattedEntry);

                if (error) {
                    throw error;
                }
            } catch (error) {
                console.error("Error inserting data:", formattedEntry);
            }
        }
    }
    return resultList;
}



app.get("/BTC-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "btc")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/ETH-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "eth")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/USDT-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "usdt")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/XRP-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "xrp")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/TRX-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "trx")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/DASH-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "dash")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});

app.get("/ZEC-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "zec")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/XEM-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "xem")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/IOST-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "iost")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/WIN-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "win")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/BTT-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "bttc")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/WRX-INR", async (req, res) => {
    let { data: stock, error } = await supabase
        .from("stock")
        .select("*")
        .eq("quote_unit", "inr")
        .eq("base_unit", "wrx")
        .order("id", { ascending: true });

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json(stock);
});
app.get("/getData", async (req, res) => {
    const url = "https://api.wazirx.com/api/v2/tickers";
    try {
        console.log("Fetching data from WazirX API...");

        const { data, error } = await supabase.from("stock").delete();
        // stocksData = await convertToInrList(response.data);

        return response.data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
});
app.get("/", async (req, res) => {
    res.send("Welcome to WazirX API");
}
);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 3000");
});