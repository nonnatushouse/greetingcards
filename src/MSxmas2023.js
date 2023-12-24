import TypewriterWindow from './Typewriter/TypewriterWindow';

const text= [
"             ",
"‽",
"\/\\",
"\/  \\",
"\/    \\",
"\/_    _\\",
"\/    \\",
"\/      \\",
"\/        \\",
"\/          \\",
"\/_          _\\",
"\/          \\",
"\/            \\",
"\/              \\",
"\/                \\",
"\/_                _\\",
"\/                \\",
"\/                  \\",
"\/                    \\",
"\/                      \\",
"\/                        \\",
"/___________     __________\\",
"|   |",
"|___|",
"      ",
"      ",
"God Jul Matildha! :)",
" ",
" ",
]

export default function MSxmas2023() {



    return(    
    <TypewriterWindow className="msxmastree"
    text={text}
    speed={50}
    reverse={true}
  />

  )
}