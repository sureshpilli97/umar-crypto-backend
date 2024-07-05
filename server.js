import express from "express";
import supabase from "./db.js";
import axios from "axios";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

const stockList = [];
async function getData(select) {
    const url = "https://api.wazirx.com/api/v2/tickers/" + select;
    try {
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        await supabase.from("stock").delete();

        const data = await convertToInrList(response.data, select.slice(0, -3));
        stockList.push(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

async function convertToInrList(data, select) {
    const entry = data['ticker'];
    const formattedEntry = {
        base_unit: select,
        quote_unit: "inr",
        type: "SPOT",
        volume: entry['vol'],
        low: entry['low'],
        high: entry['high'],
        last: entry['last'],
        buy: entry['buy'],
        sell: entry['sell'],
        name: select.toUpperCase() + "INR",
    };

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

    return formattedEntry;
}



app.get("/BTC-INR", async (req, res) => {
    await getData("btcinr");
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
    await getData("ethinr");
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
    await getData("usdtinr");
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
    await getData("xrpinr");
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
    await getData("trxinr");
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
    await getData("dashinr");
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
    await getData("zecinr");
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
    await getData("xeminr");
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
    await getData("iostinr");
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
    await getData("wininr");
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
    await getData("bttcinr");
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
    await getData("wrxinr");
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

app.get("/", async (req, res) => {
    res.send("Welcome to WazirX API");
}
);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 3000");
});