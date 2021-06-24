mod beginner;
mod my_sdl;
#[derive(Debug)] // debugging typo for struct checking
struct Model{
    names : String,
    is_blender : bool,
    verticles_count : i32
}

fn main() {
    print!("\x1B[2J\x1B[1;1H"); /* clear terminal*/
    //my_sdl::start_sdl();
    beginner::struct_main();
}


