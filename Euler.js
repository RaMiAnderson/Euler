
var y = (t) => {
    return (Math.pow(t, 2) * (Math.exp(t) - Math.exp(1)));
}

var f = (t, y)  => {
    return ((2 / t) * y + (Math.pow(t, 2) * Math.exp(t)));
}

let interpolation = (x1, x2, y1, y2, x) => {
    return (y1 + (((x - x1) * (y2 - y1)) / (x2 - x1)));
}

let euler = (a, b, alpha) => {
    let h = 0.1;
    let n = (b - a) / h;
    let result = [];
    let i = 1;
    let t = a;
    let w = alpha;
    let itemRes = {
        "y" : y(t),
        "w" : w,
        "t" : t,
    }
    result.push(itemRes);
    console.log("a) \n" + t + " " + w);
    console.log(`y = ${y(t)}`);
    while (i <= n) {
        w += (f(t, w) * h);
        t = a + (i * h);
        itemRes = {
            "y" : y(t),
            "w" : w,
            "t" : t,
        }
        result.push(itemRes);
        console.log(`i = ${i}       t = ${t.toFixed(3)}         w = ${w.toFixed(3)}         y = ${y(t).toFixed(3)}`);
        i++;
    }
    // P A R T      2
    let ptInterpol = [1.04, 1.55, 1.97];
    console.log("\nb) \nINTERPOLATION : ");

    for (let i = 0; i < ptInterpol.length; i++)
    {
        let x = ptInterpol[i];
        let j = parseInt((x - a) / h);
        if (j + 1 < result.length)
        {
            var y1 = interpolation(result[j].t, result[j + 1].t, result[j].w, result[j + 1].w, x);
            var y2 = y(x);
            console.log(`i = ${i}   y = ${y1.toFixed(3)}    Valeur exact y = ${y2.toFixed(3)}`);
        }
    }
};
euler(1, 2, 0);
