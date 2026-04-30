import { ArrowLeft, Download } from 'lucide-react'

function Section({ id, title, children }) {
  return (
    <section id={id} className="mt-12 first:mt-0">
      <h2 className="text-2xl font-bold text-neutral-900 border-b-2 border-gold pb-2 mb-4 md:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  )
}

function SubSection({ title, children }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-neutral-800 mb-3 md:text-2xl">{title}</h3>
      {children}
    </div>
  )
}

function P({ children }) {
  return <p className="text-neutral-700 leading-relaxed mb-4 text-lg">{children}</p>
}

function BulletList({ items }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-neutral-700 text-lg mb-4">
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">{item}</li>
      ))}
    </ul>
  )
}

export default function CatalogPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between sm:px-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
          <a
            href="/catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-gold-light transition-colors"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </header>

      {/* Cover */}
      <div className="bg-neutral-950 text-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <img
            src="/logo.png"
            alt="Premium Barber College"
            className="mx-auto h-auto md:h-64 max-w-[90vw] md:max-w-none w-auto mb-8"
          />
          <p className="text-neutral-400 text-lg">
            461 S Capitol Ave #17 &middot; San Jose, CA 95127 &middot; (408) 649-3606
          </p>
          <p className="text-neutral-500 mt-2">www.premiumbarbercollege.com</p>
          <div className="mt-8 inline-block border border-neutral-700 rounded-xl px-8 py-4">
            <h1 className="text-3xl font-bold md:text-4xl">Course Catalog</h1>
            <p className="text-neutral-400 mt-2 text-lg">
              Period Covered: January 1, 2026 to December 31, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Catalog content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">

        {/* Table of Contents */}
        <Section id="toc" title="Table of Contents">
          <nav className="columns-1 sm:columns-2 gap-8 text-lg">
            {[
              ['Institutional Mission and Objectives', 'mission'],
              ['Instructional Location', 'location'],
              ['Learning Management System', 'lms'],
              ['Facilities & Equipment', 'facilities'],
              ['Library Resources', 'library'],
              ['Admissions Policies', 'admissions'],
              ['Visa Related Services', 'visa'],
              ['Language Proficiency', 'language'],
              ['Accreditation Status', 'accreditation'],
              ['STRF Disclosure', 'strf'],
              ['Privacy Act', 'privacy'],
              ['Student Conduct', 'conduct'],
              ['Nondiscrimination Policy', 'nondiscrimination'],
              ['Academic Freedom', 'academic-freedom'],
              ['Sexual Harassment', 'sexual-harassment'],
              ['Student\'s Right to Cancel', 'cancel'],
              ['Withdrawal Policy', 'withdrawal'],
              ['Refund Policy', 'refund'],
              ['Financial Aid Disclosures', 'financial-aid'],
              ['Grades & Standards', 'grades'],
              ['Evaluation Policies', 'evaluation'],
              ['Attendance Policy', 'attendance'],
              ['Academic Probation & Dismissal', 'probation'],
              ['Leaves of Absence', 'leave'],
              ['Student Grievance Procedures', 'grievance'],
              ['Student Services', 'services'],
              ['Placement Services', 'placement'],
              ['Student Housing', 'housing'],
              ['Student Records & Transcripts', 'records'],
              ['Licensure Requirements', 'licensure'],
              ['Charges: Tuition & Fees', 'tuition'],
              ['Faculty', 'faculty'],
              ['Programs', 'programs'],
              ['Required Disclosures', 'disclosures'],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="block py-1 text-gold-dark hover:text-gold hover:underline break-inside-avoid"
              >
                {label}
              </a>
            ))}
          </nav>
        </Section>

        {/* Mission */}
        <Section id="mission" title="Institutional Mission and Objectives">
          <SubSection title="Institutional Mission">
            <P>
              The Mission of Premium Barber College is to provide high quality training programs that will prepare students to pass the California State Board of Barbering &amp; Cosmetology Barbering License test. Premium Barber College will provide high level barber instruction &amp; techniques to help you succeed or advance in Barbering, such as professionalism and training in business ethics needed to succeed in the Barber Industry. Premium Barber College focuses on intensive training to prepare students for the California State Board exam.
            </P>
            <P>
              Our Mission is to instill confidence behind the chair and offer a positive learning environment. Premium Barber College will prepare each student for employment in the Barber Industry as an entry-level licensed California Barber.
            </P>
          </SubSection>

          <SubSection title="Institutional Objectives">
            <P>
              The objective of Premium Barber College is to provide students with the highest quality Barber Education and skilled hands-on training to ensure every student achieves the best outcomes in their career. Students will be introduced to high level, modern techniques to advance their skills in Barber services. The following knowledge and skills will be a foundation in excelling in the barber industry:
            </P>
            <BulletList items={[
              'Skills Mastery',
              'Sanitation Practices',
              'Customer Service Excellence',
              'Business Management',
              'Industry Trends',
              'Ethical and Professional Conduct',
              'Licensing Preparation',
              'Creativity and Innovation',
              'Teamwork and Collaboration',
              'Continual Learning',
            ]} />
          </SubSection>

          <SubSection title="Program Objective: Barbering">
            <P>
              It is the objective of our Barbering program to provide comprehensive training that equips students with advanced technical skills, acquaints them with professional standards, and develops their creativity in the application of their craft, enabling them to excel as skilled barbering professionals capable of delivering high-quality services in salon and shop environments.
            </P>
          </SubSection>
        </Section>

        {/* Location */}
        <Section id="location" title="Instructional Location">
          <P>
            In-person direct instruction is provided at the main campus located at 461 S Capitol Ave #17 San Jose, CA 95127. Theory instruction is conducted asynchronously online via the learning management system CIMA (see below).
          </P>
        </Section>

        {/* LMS */}
        <Section id="lms" title="Learning Management System: CIMA by Cengage">
          <P>
            CIMA by Cengage Learning is accessible to students who have internet connectivity and receive login and password credentials from the school. Students are provided a weekly instructional plan that the student is to complete on their own schedule. CIMA is the instructional vehicle for Technical Instruction. All Practical instruction will be done at the campus.
          </P>
          <P>
            CIMA from Cengage Learning delivers a highly personalized, online learning platform. A cloud-based learning solution, CIMA combines all of the learning tools — readings, multimedia, activities and assessments into a singular Learning Path. Each enrolled student will receive log in credentials and/or access to the software.
          </P>
          <P>
            The CIMA software maintains a record of the dates that lesson assignments were completed, the amount of time the student has attended and the grades earned by the student. Students can expect that their lessons and assignments will be evaluated and a response provided within 3 days of submission.
          </P>
          <P>
            Students enroll in person and will be given a verbal orientation by the admissions personnel who completes their enrollment. The admissions representative will show the student how to log into CIMA and the basics of navigating and interacting with the content in the LMS.
          </P>
          <SubSection title="Technical Competencies and Software Requirements">
            <BulletList items={[
              'Google Chrome (recommended), Mozilla Firefox, Microsoft Edge, or similar browser',
              'Adobe Reader (minimum recommendation)',
              'Microsoft Office or Google Suite',
            ]} />
          </SubSection>
        </Section>

        {/* Facilities */}
        <Section id="facilities" title="Description of the Facilities & Type of Equipment Used for Instruction">
          <P>
            Our instructional facility is located in a retail strip setting at the corner of the intersections of S Capitol Avenue and E Capitol Expressway. We have one classroom for theory instruction and over 1,000 square feet of our school are devoted to the practical training floor where hands-on instruction takes place. Bathrooms are available for student use and the building is equipped with up-to-date heating and cooling systems. Plenty of parking is in front of the building.
          </P>
          <P>
            Our institution is equipped with all modern functional equipment needed for a barbering school: work stations, hydraulic chairs, dryers, shampoo chairs and sinks, stoves, mannequins, a projector/TV for presentations, educational charts, DVD player/HDMI hookup for educational videos, and hair products and supplies.
          </P>
          <P>
            Students will be issued minimal supplies covering instruction and practice during the first week of the course. A completed tool kit including all textbooks and equipment necessary for the satisfactory completion of the course will be issued during the second week of attendance.
          </P>
        </Section>

        {/* Library */}
        <Section id="library" title="Library Resources">
          <P>
            Our library is comprised of learning resources that consist of Barbering Textbooks, Hair color &amp; Technique Books, State Board mock or practice exams, study guides, books on Haircutting, Hair Coloring Hairstyles, and related topics. The library also consists of Videos, DVDs that contain lessons and demonstrations for students viewing germane to the material in all programs we offer.
          </P>
          <P>
            Students will have access to all library materials during school hours. Students who wish to check out material overnight must see a staff member for permission. All materials must be returned by the next school day.
          </P>
          <SubSection title="Notice Concerning Transferability of Credits and Credentials">
            <P>
              The transferability of credits you earn at Premium Barber College is at the complete discretion of an institution to which you may seek to transfer. Acceptance of the certificate you earn in the educational program is also at the complete discretion of the institution to which you may seek to transfer. If the certificate that you earn at this institution is not accepted at the institution to which you seek to transfer, you may be required to repeat some or all of your coursework at that institution. For this reason you should make certain that your attendance at this institution will meet your educational goals.
            </P>
          </SubSection>
        </Section>

        {/* Admissions */}
        <Section id="admissions" title="Admissions Policies & Recognition of Credits">
          <SubSection title="Criteria for Admission">
            <BulletList items={[
              'Student must pay all applicable fees, as per the current published fee schedule at the time of signing or entering into an enrollment contract or make other arrangements acceptable to the school.',
              'Must present a photographic driver\'s license or California I.D. and social security number.',
              'Must be at least 17 years of age.',
              'No Ability to Benefit Students will be admitted.',
              'Student must have graduated from high school or earned a GED or equivalent.',
              'Qualify for distance education instruction.',
            ]} />
            <P>
              This institution has structured the student admissions interview process in such a way that each student demonstrates via their answers in conversation that they have the skills and competencies necessary to succeed in a distance education environment. Students who do not demonstrate the ability to succeed in a distance education environment will not be admitted.
            </P>
          </SubSection>

          <SubSection title="Recognition of Credit Policies">
            <BulletList items={[
              'This institution does not award credit for satisfactory completion of CLEP or other comparable examinations.',
              'This institution does not award credit for experiential learning.',
              'This institution has not entered into an articulation or transfer agreement with any other institution.',
            ]} />
            <P>
              Students transferring from another barbering school will complete our Transfer Student Agreement and provide an official transcript from the previous school. Credits will be accepted at the discretion of our institution. The student will be charged the per hour rate for tuition for any hours remaining, a $100.00 registration fee, and will be required to purchase a student kit and a book if needed.
            </P>
          </SubSection>
        </Section>

        {/* Visa */}
        <Section id="visa" title="Visa Related Services">
          <P>This institution does not admit students from other countries, so no visa related services are offered.</P>
        </Section>

        {/* Language */}
        <Section id="language" title="Language Proficiency">
          <P>
            General knowledge of English, written and spoken is necessary to participate in our programs. The reasonable level of language proficiency required to succeed in our programs has been determined to be a reading and writing ability equivalent to the 10th grade level.
          </P>
          <P>Instructions will be given in no language other than English.</P>
          <P>This institution does not provide ESL instruction. No language services are provided by this institution.</P>
        </Section>

        {/* Accreditation */}
        <Section id="accreditation" title="Accreditation Status">
          <P>
            This institution is not accredited by an accrediting agency recognized by the United States Department of Education. A student enrolled in an unaccredited institution is not eligible for federal financial aid.
          </P>
        </Section>

        {/* STRF */}
        <Section id="strf" title="STRF Disclosure">
          <P>
            &ldquo;The State of California established the Student Tuition Recovery Fund (STRF) to relieve or mitigate economic loss suffered by a student in an educational program at a qualifying institution, who is or was a California resident while enrolled, or was enrolled in a residency program, if the student enrolled in the institution, prepaid tuition, and suffered an economic loss. Unless relieved of the obligation to do so, you must pay the state-imposed assessment for the STRF, or it must be paid on your behalf, if you are a student in an educational program, who is a California resident, or are enrolled in a residency program, and prepay all or part of your tuition.
          </P>
          <P>
            You are not eligible for protection from the STRF and you are not required to pay the STRF assessment, if you are not a California resident, or are not enrolled in a residency program.&rdquo;
          </P>
          <P>
            &ldquo;It is important that you keep copies of your enrollment agreement, financial aid documents, receipts, or any other information that documents the amount paid to the school. Questions regarding the STRF may be directed to the Bureau for Private Postsecondary Education, 1747 N. Market Blvd., Suite 225, Sacramento, CA 95834, (916) 574-8900 or (888) 370-7589.
          </P>
          <P>To be eligible for STRF, you must be a California resident or are enrolled in a residency program, prepaid tuition, paid or deemed to have paid the STRF assessment, and suffered an economic loss as a result of any of the following:</P>
          <ol className="list-decimal pl-6 space-y-2 text-neutral-700 text-lg mb-4">
            <li className="leading-relaxed">The institution, a location of the institution, or an educational program offered by the institution was closed or discontinued, and you did not choose to participate in a teach-out plan approved by the Bureau or did not complete a chosen teach-out plan approved by the Bureau.</li>
            <li className="leading-relaxed">You were enrolled at an institution or a location of the institution within the 120 day period before the closure of the institution or location of the institution, or were enrolled in an educational program within the 120 day period before the program was discontinued.</li>
            <li className="leading-relaxed">You were enrolled at an institution or a location of the institution more than 120 days before the closure of the institution or location of the institution, in an educational program offered by the institution as to which the Bureau determined there was a significant decline in the quality or value of the program more than 120 days before closure.</li>
            <li className="leading-relaxed">The institution has been ordered to pay a refund by the Bureau but has failed to do so.</li>
            <li className="leading-relaxed">The institution has failed to pay or reimburse loan proceeds under a federal student loan program as required by law, or has failed to pay or reimburse proceeds received by the institution in excess of tuition and other costs.</li>
            <li className="leading-relaxed">You have been awarded restitution, a refund, or other monetary award by an arbitrator or court, based on a violation of this chapter by an institution or representative of an institution, but have been unable to collect the award from the institution.</li>
            <li className="leading-relaxed">You sought legal counsel that resulted in the cancellation of one or more of your student loans and have an invoice for services rendered and evidence of the cancellation of the student loan or loans.</li>
          </ol>
          <P>
            To qualify for STRF reimbursement, the application must be received within four (4) years from the date of the action or event that made the student eligible for recovery from STRF.&rdquo;
          </P>
        </Section>

        {/* Privacy */}
        <Section id="privacy" title="Privacy Act">
          <P>
            It is this institution&rsquo;s intent to carefully follow the rules applicable under the Family Education Rights and Privacy Act. It is our intent to protect the privacy of a student&rsquo;s financial, academic and other school records. We will not release such information to any individual without having first received the student&rsquo;s written request to do so, or unless otherwise required by law.
          </P>
        </Section>

        {/* Student Conduct */}
        <Section id="conduct" title="Student Conduct">
          <P>
            Students are expected to behave professionally and respectfully at all times. Students are subject to dismissal for any inappropriate or unethical conduct or for any act of academic dishonesty. At the discretion of the school administration a student may be dismissed for reasons including, but not limited to:
          </P>
          <BulletList items={[
            'Coming to class in an intoxicated or drugged state.',
            'Possession of drugs or alcohol on campus.',
            'Possession of a weapon on campus.',
            'Behavior creating a safety hazard to other person(s).',
            'Disobedient or disrespectful behavior to other students, an administrator or instructor.',
            'Stealing or damaging the property of another.',
          ]} />
          <P>
            Any students found to have engaged in such conduct will be asked to leave the premises immediately. Disciplinary action will be determined by the Chief Executive Officer within 10 days after meeting with both the chair of the department and the student in question.
          </P>
        </Section>

        {/* Nondiscrimination */}
        <Section id="nondiscrimination" title="Nondiscrimination Policy">
          <P>
            This institution is committed to providing equal opportunities to all applicants to programs and to all applicants for employment. Therefore, no discrimination shall occur in any program or activity of this institution on the basis of race, color, religion, religious beliefs, national origin, sex, sexual orientation, marital status, pregnancy, age, disability, veteran&rsquo;s status, or any other classification that precludes a person from consideration as an individual.
          </P>
        </Section>

        {/* Academic Freedom */}
        <Section id="academic-freedom" title="Academic Freedom">
          <P>
            Premium Barber College is committed to assuring full academic freedom to all faculty. The college encourages its faculty members to exercise their individual judgments regarding the content of the assigned courses, organization of topics and instructional methods. Students and faculty members alike are encouraged to freely express views, however controversial, as long as they believe it would advance understanding in their specialized discipline.
          </P>
        </Section>

        {/* Sexual Harassment */}
        <Section id="sexual-harassment" title="Sexual Harassment">
          <P>
            This institution is committed to providing a work environment that is free of discrimination, intimidation and harassment. No one associated with this institution may engage in verbal abuse of a sexual nature; use sexually degrading or graphic words to describe an individual or an individual&rsquo;s body; or display sexually suggestive objects or pictures at any facility or other venue associated with this institution. Students are responsible for conducting themselves in a manner consistent with the spirit and intent of this policy.
          </P>
        </Section>

        {/* Cancel */}
        <Section id="cancel" title="Student's Right to Cancel">
          <P>
            The student shall have the right to cancel the agreement and receive a full refund pursuant to section 71750 through attendance at the first class session, or the seventh day after enrollment, whichever is later. Cancellation is effective on the date written notice of cancellation is sent by email to Efren Hernandez, premiumbarbercollege@gmail.com. Notice of cancellation must be in writing.
          </P>
        </Section>

        {/* Withdrawal */}
        <Section id="withdrawal" title="Withdrawal Policy">
          <SubSection title="Withdrawals Initiated by the Student">
            <P>
              A withdrawal may be effectuated by the student&rsquo;s written notice sent by email to Efren Hernandez, premiumbarbercollege@gmail.com. The effective date of the student&rsquo;s withdrawal shall be the date it is received by the institution.
            </P>
          </SubSection>
          <SubSection title="Withdrawals Initiated by the Institution">
            <P>Students may be administratively withdrawn for the following reasons:</P>
            <BulletList items={[
              'Disruptive and/or offensive and inappropriate behavior in class or outside of class',
              'Plagiarism and cheating in which it was concluded the student did commit such actions',
              'Being absent for more than seven (7) consecutive calendar days with no communication with the school',
            ]} />
          </SubSection>
        </Section>

        {/* Refund */}
        <Section id="refund" title="Refund Policy">
          <P>
            This institution shall refund any credit balance on the student&rsquo;s account within 45 days after the date of the student&rsquo;s cancellation of, completion of, or withdrawal from, the educational program.
          </P>
          <SubSection title="Cancellation Refund">
            <P>
              If a student cancels their enrollment, this institution shall refund 100 percent of the amount paid for institutional charges, less a reasonable deposit or application fee not to exceed two hundred fifty dollars ($250). Any fees collected related to the STRF shall be refunded. Any fees collected for educational materials otherwise noted as nonrefundable shall also be refunded.
            </P>
          </SubSection>
          <SubSection title="Withdrawal Refund">
            <P>
              A pro rata refund shall be no less than the total amount owed by the student for the portion of the educational program provided subtracted from the amount paid by the student. All amounts paid shall be subject to a pro rata refund unless the enrollment agreement specifies a non-refundable deposit (not to exceed $250) or non-refundable amounts paid for educational materials.
            </P>
          </SubSection>
        </Section>

        {/* Financial Aid */}
        <Section id="financial-aid" title="Financial Aid Disclosures">
          <P>
            This institution does not participate in any federal or state financial aid programs. A student enrolled in an unaccredited institution is not eligible for federal financial aid programs. The school does not provide financial aid directly to its students.
          </P>
        </Section>

        {/* Grades */}
        <Section id="grades" title="Grades and Standards for Student Achievement">
          <P>
            Pass/fail scores are utilized for all skills examinations, quizzes, and the final examination. Students must receive passing grades on all skills examinations and achieve an 80% or better on the final exam to successfully pass the program.
          </P>

          {/* Grading Scale Table */}
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-lg">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-4 py-3 text-left font-bold">Component</th>
                  <th className="border border-neutral-300 px-4 py-3 text-left font-bold">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-neutral-300 px-4 py-2">Practical Skills</td><td className="border border-neutral-300 px-4 py-2">30%</td></tr>
                <tr className="bg-neutral-50"><td className="border border-neutral-300 px-4 py-2">Theory Quizzes</td><td className="border border-neutral-300 px-4 py-2">25%</td></tr>
                <tr><td className="border border-neutral-300 px-4 py-2">Final Exam</td><td className="border border-neutral-300 px-4 py-2">35%</td></tr>
                <tr className="bg-neutral-50"><td className="border border-neutral-300 px-4 py-2">Participation/Attendance</td><td className="border border-neutral-300 px-4 py-2">10%</td></tr>
                <tr className="font-bold"><td className="border border-neutral-300 px-4 py-2">Total</td><td className="border border-neutral-300 px-4 py-2">100%</td></tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-lg">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-4 py-3 text-left font-bold">Type</th>
                  <th className="border border-neutral-300 px-4 py-3 text-left font-bold">Grade Scale</th>
                  <th className="border border-neutral-300 px-4 py-3 text-left font-bold">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-neutral-300 px-4 py-2" rowSpan={2}>Quizzes/Tests/Final</td><td className="border border-neutral-300 px-4 py-2">80 and Above</td><td className="border border-neutral-300 px-4 py-2 font-medium text-green-700">Pass</td></tr>
                <tr className="bg-neutral-50"><td className="border border-neutral-300 px-4 py-2">79 &amp; Below</td><td className="border border-neutral-300 px-4 py-2 font-medium text-red-700">Fail</td></tr>
                <tr><td className="border border-neutral-300 px-4 py-2" rowSpan={2}>Skills Assessment</td><td className="border border-neutral-300 px-4 py-2">90 and Above</td><td className="border border-neutral-300 px-4 py-2 font-medium text-green-700">Pass</td></tr>
                <tr className="bg-neutral-50"><td className="border border-neutral-300 px-4 py-2">89 &amp; Below</td><td className="border border-neutral-300 px-4 py-2 font-medium text-red-700">Fail</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Evaluation */}
        <Section id="evaluation" title="Evaluation Policies">
          <P>
            Grades are awarded on a pass/fail basis. Students must achieve a &ldquo;pass&rdquo; rating on all quizzes and skill demonstrations. All students will be required to pass the final skills examinations with 90% proficiency.
          </P>
          <P>
            If the student has not completed the coursework and earned a grade at the end of the program, the instructor may issue: <strong>I (Incomplete)</strong> — a two-month extension when the student is making satisfactory progress; or <strong>W (Withdraw)</strong> — when the instructor believes the student&rsquo;s progress is insufficient.
          </P>
        </Section>

        {/* Attendance */}
        <Section id="attendance" title="Attendance Policy — All Programs">
          <P>
            Students are required to attend 100% of the required hours of instruction throughout the entire program. When a student falls below 80% attendance they will be given a verbal warning. When a student falls below 75% attendance they will be placed on probation. Students who arrive more than 10 minutes late will receive an unexcused absence for that class period, subject to review by the instructor.
          </P>
        </Section>

        {/* Probation */}
        <Section id="probation" title="Academic Probation and Dismissal Policies">
          <P>
            The Chief Academic Officer may place a student on academic probation if the student is not making satisfactory academic progress. After the completion of the current module, the student will have two additional modules to bring their pass/fail percentage up to the minimum standard. Failure to achieve satisfactory academic progress may result in dismissal from the program.
          </P>
        </Section>

        {/* Leave */}
        <Section id="leave" title="Leaves of Absence">
          <P>
            It is the policy of the school to not grant a Leave of Absence to students. The school director may grant a leave of absence after determining that good cause is shown. A student may have no more than two leaves of absence in a 12-month calendar period, and may be on leave of absence no more than 30 calendar days during that 12-month calendar period.
          </P>
        </Section>

        {/* Grievance */}
        <Section id="grievance" title="Student Grievance Procedures — Student Rights">
          <P>
            Most problems or complaints that students may have with the school can be resolved through a personal meeting with the student&rsquo;s instructor or a counselor. If this action does not resolve the matter, the student may submit a written complaint to the main campus: Premium Barber College, 461 S Capitol Ave #17 San Jose, CA 95127.
          </P>
          <P>Continued unresolved complaints may be directed to:</P>
          <div className="bg-neutral-100 rounded-xl p-5 my-4 text-lg">
            <p className="font-bold text-neutral-900">Bureau for Private Postsecondary Education</p>
            <p className="text-neutral-700">P.O. Box 980818</p>
            <p className="text-neutral-700">West Sacramento, CA 95798-0818</p>
            <p className="text-neutral-700">Phone: (916) 574-8900</p>
            <p className="text-neutral-700">
              Web:{' '}
              <a href="https://www.bppe.ca.gov" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline hover:text-gold">
                www.bppe.ca.gov
              </a>
            </p>
          </div>
        </Section>

        {/* Services */}
        <Section id="services" title="Student Services">
          <P>
            This institution maintains a focus on the delivery of educational services. Should a student encounter personal problems which interfere with his or her ability to complete coursework, this institution will provide assistance in identifying appropriate professional assistance in the student&rsquo;s local community.
          </P>
        </Section>

        {/* Placement */}
        <Section id="placement" title="Placement Services">
          <P>
            This institution provides placement assistance for all graduate students who wish to use the service. No guarantee of placement can be made. Services may include:
          </P>
          <BulletList items={[
            'Assistance with the preparation of employment interviewing and completion of job applications',
            'Direct employer referrals',
            'Information regarding job market and employment trends',
            'Employment seeking skills',
          ]} />
        </Section>

        {/* Housing */}
        <Section id="housing" title="Student Housing">
          <P>
            This institution does not operate dormitories or other housing facilities. Housing in the immediate area is available in two story walkup and garden apartments. Monthly rent for a one bedroom unit is approximately $2,000 a month.
          </P>
        </Section>

        {/* Records */}
        <Section id="records" title="Student Records and Transcripts">
          <P>
            Student records for all students are kept for five years. Transcripts are kept permanently. Students may inspect and review their educational records by submitting a written request identifying the specific information to be reviewed. Transcripts will only be released to the student upon receipt of a written request bearing the student&rsquo;s live signature.
          </P>
        </Section>

        {/* Licensure */}
        <Section id="licensure" title="Professions — Requirements for Eligibility for Licensure">
          <P>
            Licensure is a goal of the program. The program requires the completion of a Board approved course of instruction and achievement of a passing grade on a Board of Barbering and Cosmetology administered exam.
          </P>
          <SubSection title="Eligibility Requirements">
            <BulletList items={[
              'Complete 1,000 hours in a Board approved school',
              'Be at least 17 years of age',
              'Completed the 10th grade in a public school or its equivalency',
              'Committed no acts or crimes constituting grounds for denial of licensure under Section 480 of the Business and Professions Code',
              'Have a valid Social Security number before taking the examination',
            ]} />
            <P>
              The license will be granted by the Barbering &amp; Cosmetology Board only after the student has successfully completed and graduated from the Barber course and passed the examination with an overall average score of 75%. The Board requires a $125 non-refundable initial license fee.
            </P>
          </SubSection>
        </Section>

        {/* Tuition */}
        <Section id="tuition" title="Charges: Tuition & Fees">
          <P>All fees are subject to change from time to time, without notice.</P>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-lg">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-4 py-3 text-left font-bold">Item</th>
                  <th className="border border-neutral-300 px-4 py-3 text-right font-bold">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-neutral-300 px-4 py-2">Tuition</td><td className="border border-neutral-300 px-4 py-2 text-right">$9,590</td></tr>
                <tr className="bg-neutral-50"><td className="border border-neutral-300 px-4 py-2">Registration Fee*</td><td className="border border-neutral-300 px-4 py-2 text-right">$250</td></tr>
                <tr><td className="border border-neutral-300 px-4 py-2">STRF ($0/$1000)</td><td className="border border-neutral-300 px-4 py-2 text-right">$0</td></tr>
                <tr className="bg-neutral-50"><td className="border border-neutral-300 px-4 py-2">CIMA License**</td><td className="border border-neutral-300 px-4 py-2 text-right">$350</td></tr>
                <tr><td className="border border-neutral-300 px-4 py-2">Kits**</td><td className="border border-neutral-300 px-4 py-2 text-right">$60</td></tr>
                <tr className="font-bold bg-gold/10"><td className="border border-neutral-300 px-4 py-3">Total Program Charges</td><td className="border border-neutral-300 px-4 py-3 text-right">$10,250.00</td></tr>
              </tbody>
            </table>
          </div>
          <P className="text-sm">
            *Nonrefundable. **Nonrefundable after the cancellation period.
          </P>
          <P>
            <strong>Transfer of Credit Fee (if applicable):</strong> $100
          </P>
          <P>
            <strong>Non-Institutional Fees:</strong> Licensure fees are the responsibility of the student and are paid directly to the State. Barbering license fee: $125.
          </P>
        </Section>

        {/* Faculty */}
        <Section id="faculty" title="Faculty">
          <P>
            All faculty members demonstrate the professionalism and excellent communication skills required of an effective teacher, and are all required to have at minimum 3 years of experience in the beauty industry.
          </P>
          <div className="grid gap-4 sm:grid-cols-2 my-6">
            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
              <h4 className="text-lg font-bold text-neutral-900">Efren Hernandez</h4>
              <p className="text-neutral-600 mt-1">17 years of experience as a barber and shop owner</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
              <h4 className="text-lg font-bold text-neutral-900">Jose Flores</h4>
              <p className="text-neutral-600 mt-1">16 years of experience as a barber</p>
            </div>
          </div>
        </Section>

        {/* Programs */}
        <Section id="programs" title="Programs">
          <SubSection title="Barber Program">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-dark border border-gold/20">1,000 Clock Hours</span>
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-700 border border-neutral-200">SOC 39-5011</span>
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-700 border border-neutral-200">No Externship Required</span>
            </div>
            <P>
              This program covers all aspects of barbering, including hair styling, chemical hair services, and beard shaving and trimming techniques. Successful completion of this program will make the graduate eligible to take their licensure exam and obtain a Barbering license and pursue employment in the field.
            </P>
            <P>
              <strong>Graduation Requirements:</strong> Complete at least a 70% cumulative grade average and pass the final skills exam.
            </P>
          </SubSection>

          <SubSection title="Program Mission and Objectives">
            <P>Upon completion of this program the student will have the ability to perform the following:</P>
            <BulletList items={[
              'Acquire knowledge of laws and rules pertaining to health and safety and best practices for infection control and prevention',
              'Demonstrate proper sanitation and sterilization of implements and workspace',
              'Understand general theory topics of Barbering',
              'Understand and demonstrate the proper use of implements relative to all Barbering services',
              'Acquire the skill for analyzing the hair and skin prior to all services',
              'Use appropriate terminology used in performing all Barbering services',
              'Execute proper and accurate procedures in hair and shaving services',
              'Develop appreciation of good workmanship common to Barbering',
            ]} />
          </SubSection>

          <SubSection title="Outline of Subject Matter">
            <h4 className="text-lg font-bold text-neutral-800 mt-6 mb-3">Health &amp; Safety</h4>
            <BulletList items={[
              'Infection Control & Regulations',
              'Principles of Infection Prevention Measures',
              'Chemicals and your Health / Safety Data Sheets',
              'Safe Chemical Handling in the Establishment',
              'Communicable Diseases: Prevent the Spread',
              'Health and Safety Laws and Agencies',
              'Ergonomics: Fitting the Job to the Person',
              'Worker\'s Rights / Sexual & Physical Assault Awareness',
              'Disinfection and Sanitation',
              'Proper Hand Washing / Disinfectants',
              'Standard protection precautions / Personal protective equipment',
            ]} />

            <h4 className="text-lg font-bold text-neutral-800 mt-6 mb-3">Chemical Hair Services</h4>
            <BulletList items={[
              'Hair Analysis & Predisposition',
              'How chemical services affect the structure of hair',
              'Techniques for permanent waving & soft curl permanents',
              'Chemical hair relaxers/straightening techniques & safety precautions',
              'Hair color consultation & strand tests',
              'Alternative hair coloring techniques: Balayage, Ombre',
              'Proper mixing and formulation / Application of hair color',
              'Bleaching: How to use lighteners',
              'Color correction and effective use of dye removers',
            ]} />

            <h4 className="text-lg font-bold text-neutral-800 mt-6 mb-3">Hairstyling Services</h4>
            <BulletList items={[
              'Styling and arranging of various hair lengths and styles',
              'Pin curls, roller curls, hair wrapping',
              'Master comb-out techniques',
              'Basic blow dry styling & thermal hair straightening',
              'Curling iron techniques / Safety in thermal hairstyling',
              'Shampooing principles and techniques',
              'Basic haircutting techniques (wet and dry)',
              'Proper use of shears, razors, electrical clippers and trimmers, thinning shears',
              'Posture and body position',
            ]} />

            <h4 className="text-lg font-bold text-neutral-800 mt-6 mb-3">Shaving and Trimming of the Beard</h4>
            <BulletList items={[
              'Shaving Safety Considerations / Tools and Product Knowledge',
              'Station Setup / Preparing the client for a shave',
              'Effective skin condition assessment',
              'Standard shave procedures and techniques',
              'Facial without shave (including traditional massage and rolling cream massage techniques)',
              'Facial with shave, including application of aftershave antiseptic',
            ]} />
          </SubSection>
        </Section>

        {/* Required Disclosures */}
        <Section id="disclosures" title="Required Disclosures">
          <P>
            The policy of this institution is to update the official school catalog annually, in January of each year.
          </P>
          <P>
            This institution is a private institution. The school was granted institutional approval to operate by the Bureau of Private Post Secondary Education (BPPE). The Bureau&rsquo;s approval means compliance with state standards set forth in CEC and 5, CCR. This approval does not mean that the institution or its educational programs are endorsed or recommended by the state or by the bureau, nor that the approval to operate indicates that the institution exceeds minimum state standards.
          </P>
          <P>
            This institution has not had a pending petition in bankruptcy, is not operating as a debtor in possession, has not filed a bankruptcy petition within the preceding five years, and has not had a petition in bankruptcy filed against it within the preceding five years that resulted in reorganization under Chapter 11 of the United States Bankruptcy Code.
          </P>
          <P>
            As a prospective student, you are encouraged to review this catalog prior to signing an enrollment agreement. You are also encouraged to review the School Performance Fact Sheet, which must be provided to you prior to signing an enrollment agreement.
          </P>
          <P>
            If a student obtains a loan to pay for an educational program, the student will have the responsibility to repay the full amount of the loan plus interest, less the amount of any refund.
          </P>
          <div className="bg-neutral-100 rounded-xl p-5 my-6 text-lg">
            <p className="text-neutral-700 leading-relaxed">
              Any questions a student may have regarding this catalog may be directed to the Bureau for Private Postsecondary Education at 1747 North Market, Suite 225 Sacramento, CA 95834, P.O. Box 980818, West Sacramento, CA 95798,{' '}
              <a href="https://www.bppe.ca.gov" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline hover:text-gold">www.bppe.ca.gov</a>,
              toll free telephone number (888) 370-7589, Fax (916) 263-1897.
            </p>
            <p className="text-neutral-700 leading-relaxed mt-3">
              A student or any member of the public may file a complaint about this institution with the Bureau by calling (888) 370-7589 or by completing a complaint form at{' '}
              <a href="https://www.bppe.ca.gov" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline hover:text-gold">www.bppe.ca.gov</a>.
            </p>
            <p className="text-neutral-700 leading-relaxed mt-3">
              The Office of Student Assistance and Relief is available to support students. Contact: (888) 370-7589, option 5 or visit{' '}
              <a href="https://osar.bppe.ca.gov" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline hover:text-gold">osar.bppe.ca.gov</a>.
            </p>
          </div>
        </Section>

        {/* Bottom download button */}
        <div className="mt-16 text-center border-t border-neutral-200 pt-10">
          <a
            href="/catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-lg font-bold text-neutral-950 hover:bg-gold-light transition-colors"
          >
            <Download className="h-5 w-5" />
            Download Catalog (PDF)
          </a>
          <p className="mt-4 text-neutral-500">
            <button
              type="button"
              onClick={() => { onNavigate('/'); }}
              className="text-gold-dark underline hover:text-gold"
            >
              &larr; Return to Homepage
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
