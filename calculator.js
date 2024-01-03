function func_destroy() {
    document.getElementById('var_display').innerHTML = "";
}

function func_key(val) {
    document.getElementById('var_display').innerHTML += val;
}

function func_solve() {
    let var_x = document.getElementById('var_display').innerHTML;
    let var_y = eval(var_x);
    document.getElementById('var_display').innerHTML = var_y;
    return var_y;
}

function func_back() {
    let var_value = document.getElementById('var_display').innerHTML;
    document.getElementById('var_display').innerHTML  = var_value.substr(0, var_value.length - 1);
}
