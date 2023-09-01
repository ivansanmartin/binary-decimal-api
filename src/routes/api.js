const express = require("express");

const router = express.Router();

router.use(express.json());

const date = new Date();

const responseCodeErrorBinary = (binary) => {
    notValidBinary = binary.every((num) =>
        num == 1 || num == 0 ? true : false
    );

    if (!notValidBinary) {
        return {
            ok: false,
            NOT_VALID_BINARY: "The binary number is not valid",
        };
    } else {
        return {
            ok: true,
        };
    }
};

const responseCodeErrorDecimal = (decimal) => {
    negativeNumber = decimal < 0 || isNaN(decimal) ? true : false;

    if (negativeNumber) {
        return {
            ok: false,
            NOT_VALID_DECIMAL: "The decimal number is not valid",
        };
    } else {
        return {
            ok: true,
        };
    }
};

router.get("/project", (req, res) => {
    res.render("main");
});

router.get("/project/api/binary_to_decimal/", (req, res) => {
    res.redirect("/project");
});

router.get("/project/api/decimal_to_binary", (req, res) => {
    res.redirect("/project");
});

router.get("/project/api/binary_to_decimal/:binaryNumber", (req, res) => {
    let bitPositions = [];
    let finalBinaryLength = [];
    let decimalNumber = 0;

    const binaryNumber = req.params.binaryNumber;

    for (let i = 0; i < binaryNumber.length; i++) {
        finalBinaryLength.push(binaryNumber[i]);
    }

    finalBinaryLength.forEach((value, index) => {
        bitPositions.push(
            value == "1" ? Math.pow(2, finalBinaryLength.length - 1 - index) : 0
        );
    });

    bitPositions.forEach((value) => {
        decimalNumber += value;
    });
    let response = responseCodeErrorBinary(finalBinaryLength);

    if (response.ok) {
        res.json({
            ok: true,
            binary_number: req.params.binaryNumber,
            decimal_convert: String(decimalNumber),
            conversion_date: `${date.getDate()}/${
                date.getMonth() + 1
            }/${date.getFullYear()}`,
        });
    } else if (!response.ok) {
        res.status(400).json(response);
    }
});

router.get("/project/api/decimal_to_binary/:decimalNumber", (req, res) => {
    const isPaddingIpv4 =
        req.query.padding_ipv4 == "true"
            ? true
            : req.query.padding_ipv4 == "false"
            ? false
            : false;

    let decimalNumber = req.params.decimalNumber;
    const binaryNumber = [];

    while (decimalNumber > 0) {
        if (decimalNumber % 2 == 0) {
            decimalNumber /= 2;
            binaryNumber.push("0");
        } else {
            decimalNumber--;
            binaryNumber.push("1");
            decimalNumber /= 2;
        }
    }

    let response = responseCodeErrorDecimal(req.params.decimalNumber);

    if (response.ok) {
        if (isPaddingIpv4 && binaryNumber.length < 8) {
            binaryNumber.reverse();
            while (isPaddingIpv4 && binaryNumber.length < 8) {
                binaryNumber.unshift("0");
            }
            if (binaryNumber.length == 8) {
                res.json({
                    ok: true,
                    decimal_number: req.params.decimalNumber,
                    binary_convert: binaryNumber.join(""),
                    ipv4: true,
                    conversion_date: `${date.getDate()}/${
                        date.getMonth() + 1
                    }/${date.getFullYear()}`,
                });
            }
        } else if (!isPaddingIpv4) {
            res.json({
                ok: true,
                decimal_number: req.params.decimalNumber,
                binary_convert: binaryNumber.reverse().join(""),
                conversion_date: `${date.getDate()}/${
                    date.getMonth() + 1
                }/${date.getFullYear()}`,
            });
        } else {
            res.json({
                ok: true,
                decimal_number: req.params.decimalNumber,
                binary_convert: binaryNumber.reverse().join(""),
                conversion_date: `${date.getDate()}/${
                    date.getMonth() + 1
                }/${date.getFullYear()}`,
            });
        }
    } else if (!response.ok) {
        res.status(400).json(response);
    }
});

router.post("/project/api/text_to_binary", (req, res) => {
    let data = req.body;
    let dataExists = data.hasOwnProperty("text");
    let dataText = req.body.text;
    let dataTextArray = [];
    let textCharsAscii = [];
    let charsBinary = [];

    if (!dataExists) {
        res.json({
            ok: false,
            INCORRECT_STRUCTURE:
                "Follow the correctly json structure. Read the documentation",
        });
        return;
    }

    for (let i = 0; i < dataText.length; i++) {
        dataTextArray.push(dataText[i]);
    }

    dataTextArray.forEach((value) => {
        textCharsAscii.push(value.charCodeAt());
    });

    let tempBinary = "";

    for (let i = 0; i < textCharsAscii.length; ) {
        while (textCharsAscii[i] > 0) {
            if (textCharsAscii[i] % 2 == 0) {
                textCharsAscii[i] /= 2;
                tempBinary += "0";
            } else {
                textCharsAscii[i]--;
                tempBinary += "1";
                textCharsAscii[i] /= 2;
            }
        }
        if (textCharsAscii[i] == 0) {
            while (tempBinary.length < 8) {
                tempBinary += 0;
                if (tempBinary.length == 8) {
                    break;
                }
            }
            charsBinary.push(tempBinary.split("").reverse().join(""));
            tempBinary = "";
            i++;
        }
    }

    res.json({
        response: "ok",
        text_converted: charsBinary.join(""),
    });
});

router.post("/project/api/binary_to_text", (req, res) => {
    res.json({
        "test": "Test repository"
    })
})

module.exports = router;
