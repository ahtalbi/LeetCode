use std::cmp::min;

struct Solution;

impl Solution {
    pub fn shortest_to_char(s: String, c: char) -> Vec<i32> {
        let mut v = vec![];

        for alphabet in s.chars() {
            if alphabet == c {
                v.push(0);
            } else {
                v.push(-1);
            }
        }

        println!("{:?}", v);
        for i in 0..v.len() {
            if v[i] == -1 {
                let mut rj = i;
                let (mut cl, mut cr) = (0, 0);

                // check right
                while rj <= v.len() - 1 && v[rj] != 0 {
                    cr = cr + 1;
                    rj = rj + 1;
                }

                if rj == v.len() {
                    cr = i32::MAX; 
                }

                let mut lj = i;
                // check left
                while v[lj] != 0 {
                    cl = cl + 1;
                    if lj == 0 {
                        lj = rj;
                        cl = cr;
                    } else {
                        lj = lj - 1;
                    }
                }

                println!("here : {} {} {}", cl, cr, i);

                // put the min or the middle
                v[i] = min(cl, cr);
            }
        }
        println!("here we are");
        println!("{:?}", v);
        v
    }
}
fn main() {
    let sol = Solution::shortest_to_char("aaba".to_string(), 'b');
    println!("{:?}", sol);
}
