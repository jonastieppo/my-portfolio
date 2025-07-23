import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

// About Component
export default function About (){
    return (<>
                {/* Skills Section */}
                <Skills />

                {/* Experience Section */}
                <Experience />

                {/* Education Section */}
                <Education />
    </>
    )
}
