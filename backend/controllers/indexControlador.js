
const home = (req, res) => {
    res.json({
      msg: "Hola Mundo ExpressJS"
    });

};

const ladocuadrado = (req, res) => {
        const lado = req.params;
        console.log(lado);
    }

export {
    home,
    ladocuadrado
}