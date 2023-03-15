module.exports = () => {
    alerts({ type: 'warning', msg: `CLI DATA` });
    console.log('Cli.input', cli.input);
    console.log('Cli.flags', cli.flags);
}