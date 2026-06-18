use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn unique_morse_representations(words: Vec<String>) -> i32 {
        let morse = [
            ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....",
            "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
            "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
            "-.--", "--.."
        ];

        for i in morse{
            println!("{:?}", i);
        }

        println!("--------------------------------");

              for i in morse{
            println!("{:?}", i);
        }
        // let mut it: Vec<_> = morse.iter().enumerate().map(|m| (('a' as u8 + m.0 as u8) as char, m.1)).collect();
        // let mut map : HashMap<char, &str> = HashMap::new();



        // for i in it.iter() {
        //     map.insert(i.0, i.1);
        // }

        // let mut lastMorus = "";

        // for word in words {
        //     let mut nowMorus = "";
        //     for chr in word.chars() {
        //         println!("{}", chr);
        //     }
        // }

        // println!("{:?}", map[&'a']);

        return 10;
    }
}

fn main() {

    let sol = Solution::unique_morse_representations((["gin","zen","gig","msg"].map(|word| word.to_string())).to_vec());
    // println!("{}", sol);


    
}
