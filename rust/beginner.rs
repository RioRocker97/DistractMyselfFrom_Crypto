
pub fn abc(x:i32) -> i32 {
    println!("You are in ABC!");
    if x+10 > 50 {return 500}
    else if x+10 > 30 {return 300}
    else{return x+10}
}
pub fn the_rest(){
    let x = 10;
    let y = x+10;
    let res = x+y;
    println!("Res : {}",res);
    println!("Res+5 : {}",res+5);
    println!("Res+5.5 : {}",res as f64+5.5);
    let emoji = '\u{1F643}';
    println!("Emoji :{}{}{}",emoji,emoji,emoji);
    let ary = ["ช้าง";3];
    for i in 0..3{
        println!("Array {}: {}",i,ary[i]);
    }
    let jack = abc(41);
    println!("From abc :{}",jack);
}
#[derive(Debug)] // debugging typo for struct checking
struct Model{
    names : String,
    is_blender : bool,
    verticles_count : i32
}

pub fn struct_main() {
    print!("\x1B[2J\x1B[1;1H"); /* clear terminal*/
    //my_sdl::start_sdl();
    let model1 = Model{
        names : String::from("New model"),
        is_blender : true,
        verticles_count : 564
    };
    let model2 = model_build(String::from("Another model"),1024);
    let mut model3 = Model{
        names : String::from("Third model"),
        ..model1
    };
    let model4 = Model{
        names : String::from("Forth model"),
        ..model3
    };
    let model5 = Model{
        names : String::from("Last model"),
        ..model4
    };
    let all_model = [model1,model2];
    model3.names = String::from("I changed my mind");
    print_meta_data_size2(&all_model);
    println!("DEBUG {:?}",model3);
    print_meta_data_size2(&[model3,model4]);
    println!("Is {} made from blender ? : {}",model5.names,model5.check_if_blender());
}

fn model_build(names:String,verticles_count:i32) -> Model{
    Model{
        names,
        is_blender : false,
        verticles_count
    }
} 
fn print_meta_data_size2(all_model:&[Model ; 2]){
    for each_model in 0..all_model.len(){
        println!("---------------------------");
        println!("This {} has {} verticles",all_model[each_model].names,all_model[each_model].verticles_count);
        if all_model[each_model].is_blender {
            println!("Made from blender.");
        }
        println!("---------------------------");
    }
}
impl Model{
    fn check_if_blender(&self) -> bool{
        self.is_blender
    }
}