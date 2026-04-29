from fpdf import FPDF

GOLD = (201, 168, 76)
DARK = (40, 40, 40)
MID = (60, 60, 60)
BODY = (50, 50, 50)
LIGHT = (100, 100, 100)
MUTED = (150, 150, 150)

TOC_ENTRIES = [
    'Institutional Mission and Objectives',
    'Instructional Location',
    'Learning Management System: CIMA by Cengage',
    'Description of the Facilities & Type of Equipment',
    'Library Resources',
    'Admissions Policies & Recognition of Credits',
    'Visa Related Services',
    'Language Proficiency',
    'Accreditation Status',
    'STRF Disclosure',
    'Privacy Act',
    'Student Conduct',
    'Nondiscrimination Policy',
    'Academic Freedom',
    'Sexual Harassment',
    "Student's Right to Cancel",
    'Withdrawal Policy',
    'Refund Policy',
    'Financial Aid Disclosures',
    'Grades and Standards for Student Achievement',
    'Evaluation Policies',
    'Attendance Policy',
    'Academic Probation and Dismissal',
    'Leaves of Absence',
    'Student Grievance Procedures',
    'Student Services',
    'Placement Services',
    'Student Housing',
    'Student Records and Transcripts',
    'Requirements for Eligibility for Licensure',
    'Charges: Tuition & Fees',
    'Faculty',
    'Programs',
    'Required Disclosures',
]

toc_links = {}
section_final_pages = {}


class CatalogPDF(FPDF):
    def header(self):
        if self.page_no() > 2:
            self.set_font('Helvetica', 'B', 9)
            self.set_text_color(*MUTED)
            self.cell(0, 8, 'Premium Barber College - Course Catalog 2026', align='C')
            self.ln(12)

    def footer(self):
        self.set_y(-15)
        self.set_font('Helvetica', '', 8)
        self.set_text_color(*MUTED)
        self.cell(0, 10, f'Page {self.page_no()}', align='C')

    def section_title(self, title):
        self.ln(6)
        self.set_font('Helvetica', 'B', 16)
        self.set_text_color(*DARK)
        section_final_pages[title] = self.page_no()
        if title in toc_links:
            self.set_link(toc_links[title], y=self.get_y(), page=self.page_no())
        self.cell(0, 10, title)
        self.ln(8)
        self.set_draw_color(*GOLD)
        self.set_line_width(0.8)
        self.line(self.get_x(), self.get_y(), self.get_x() + 190, self.get_y())
        self.ln(6)

    def sub_title(self, title):
        self.ln(3)
        self.set_font('Helvetica', 'B', 13)
        self.set_text_color(*MID)
        self.cell(0, 8, title)
        self.ln(7)

    def body_text(self, text):
        self.set_font('Helvetica', '', 11)
        self.set_text_color(*BODY)
        self.multi_cell(0, 6.5, text)
        self.ln(3)

    def bullet_list(self, items):
        self.set_font('Helvetica', '', 11)
        self.set_text_color(*BODY)
        for item in items:
            self.cell(6, 5, '-')
            self.multi_cell(0, 5, f' {item}')
            if self.get_x() != self.l_margin:
                self.ln()
        self.ln(2)

    def table_row(self, cells, bold=False, bg=False):
        if bg:
            self.set_fill_color(245, 245, 245)
        style = 'B' if bold else ''
        self.set_font('Helvetica', style, 11)
        self.set_text_color(*BODY)
        col_w = 190 / len(cells)
        for i, cell in enumerate(cells):
            align = 'R' if i == len(cells) - 1 and len(cells) > 1 else 'L'
            self.cell(col_w, 8, cell, border=1, fill=bg, align=align)
        self.ln()


def render_all_content(p):
    p.add_page()
    p.section_title('Institutional Mission and Objectives')
    p.sub_title('Institutional Mission')
    p.body_text('The Mission of Premium Barber College is to provide high quality training programs that will prepare students to pass the California State Board of Barbering & Cosmetology Barbering License test. Premium Barber College will provide high level barber instruction & techniques to help you succeed or advance in Barbering, such as professionalism and training in business ethics needed to succeed in the Barber Industry. Premium Barber College focuses on intensive training to prepare students for the California State Board exam.')
    p.body_text('Our Mission is to instill confidence behind the chair and offer a positive learning environment. Premium Barber College will prepare each student for employment in the Barber Industry as an entry-level licensed California Barber.')
    p.sub_title('Institutional Objectives')
    p.body_text('The objective of Premium Barber College is to provide students with the highest quality Barber Education and skilled hands-on training to ensure every student achieves the best outcomes in their career. Students will be introduced to high level, modern techniques to advance their skills in Barber services. The following knowledge and skills will be a foundation in excelling in the barber industry:')
    p.bullet_list(['Skills Mastery', 'Sanitation Practices', 'Customer Service Excellence', 'Business Management', 'Industry Trends', 'Ethical and Professional Conduct', 'Licensing Preparation', 'Creativity and Innovation', 'Teamwork and Collaboration', 'Continual Learning'])
    p.sub_title('Program Objective: Barbering')
    p.body_text('It is the objective of our Barbering program to provide comprehensive training that equips students with advanced technical skills, acquaints them with professional standards, and develops their creativity in the application of their craft, enabling them to excel as skilled barbering professionals capable of delivering high-quality services in salon and shop environments.')

    p.section_title('Instructional Location')
    p.body_text('In-person direct instruction is provided at the main campus located at 461 S Capitol Ave #17 San Jose, CA 95127. Theory instruction is conducted asynchronously online via the learning management system CIMA (see below).')

    p.section_title('Learning Management System: CIMA by Cengage')
    p.body_text('CIMA by Cengage Learning is accessible to students who have internet connectivity and receive login and password credentials from the school. Students are provided a weekly instructional plan that the student is to complete on their own schedule. CIMA is the instructional vehicle for Technical Instruction. All Practical instruction will be done at the campus.')
    p.body_text('CIMA from Cengage Learning delivers a highly personalized, online learning platform. A cloud-based learning solution, CIMA combines all of the learning tools - readings, multimedia, activities and assessments into a singular Learning Path. Each enrolled student will receive log in credentials and/or access to the software.')
    p.body_text('The CIMA software maintains a record of the dates that lesson assignments were completed, the amount of time the student has attended and the grades earned by the student. Students can expect that their lessons and assignments will be evaluated and a response provided within 3 days of submission.')
    p.sub_title('Technical Competencies and Software Requirements')
    p.bullet_list(['Google Chrome (recommended), Mozilla Firefox, Microsoft Edge, or similar browser', 'Adobe Reader (minimum recommendation)', 'Microsoft Office or Google Suite'])

    p.section_title('Description of the Facilities & Type of Equipment')
    p.body_text('Our instructional facility is located in a retail strip setting at the corner of the intersections of S Capitol Avenue and E Capitol Expressway. We have one classroom for theory instruction and over 1,000 square feet of our school are devoted to the practical training floor where hands-on instruction takes place. Bathrooms are available for student use and the building is equipped with up-to-date heating and cooling systems. Plenty of parking is in front of the building.')
    p.body_text('Our institution is equipped with all modern functional equipment needed for a barbering school: work stations, hydraulic chairs, dryers, shampoo chairs and sinks, stoves, mannequins, a projector/TV for presentations, educational charts, DVD player/HDMI hookup for educational videos, and hair products and supplies.')
    p.body_text('Students will be issued minimal supplies covering instruction and practice during the first week of the course. A completed tool kit including all textbooks and equipment necessary for the satisfactory completion of the course will be issued during the second week of attendance.')

    p.section_title('Library Resources')
    p.body_text('Our library is comprised of learning resources that consist of Barbering Textbooks, Hair color & Technique Books, State Board mock or practice exams, study guides, books on Haircutting, Hair Coloring Hairstyles, and related topics. The library also consists of Videos, DVDs that contain lessons and demonstrations for students viewing germane to the material in all programs we offer.')
    p.body_text('Students will have access to all library materials during school hours. Students who wish to check out material overnight must see a staff member for permission. All materials must be returned by the next school day.')
    p.sub_title('Notice Concerning Transferability of Credits and Credentials')
    p.body_text('The transferability of credits you earn at Premium Barber College is at the complete discretion of an institution to which you may seek to transfer. Acceptance of the certificate you earn in the educational program is also at the complete discretion of the institution to which you may seek to transfer. If the certificate that you earn at this institution is not accepted at the institution to which you seek to transfer, you may be required to repeat some or all of your coursework at that institution. For this reason you should make certain that your attendance at this institution will meet your educational goals.')

    p.section_title('Admissions Policies & Recognition of Credits')
    p.sub_title('Criteria for Admission')
    p.bullet_list(["Student must pay all applicable fees, as per the current published fee schedule.", "Must present a photographic driver's license or California I.D. and social security number.", 'Must be at least 17 years of age.', 'No Ability to Benefit Students will be admitted.', 'Student must have graduated from high school or earned a GED or equivalent.', 'Qualify for distance education instruction.'])
    p.body_text('This institution has structured the student admissions interview process in such a way that each student demonstrates via their answers in conversation that they have the skills and competencies necessary to succeed in a distance education environment.')
    p.sub_title('Recognition of Credit Policies')
    p.bullet_list(['This institution does not award credit for satisfactory completion of CLEP or other comparable examinations.', 'This institution does not award credit for experiential learning.', 'This institution has not entered into an articulation or transfer agreement with any other institution.'])
    p.body_text('Students transferring from another barbering school will complete our Transfer Student Agreement and provide an official transcript from the previous school. Credits will be accepted at the discretion of our institution.')

    p.section_title('Visa Related Services')
    p.body_text('This institution does not admit students from other countries, so no visa related services are offered.')

    p.section_title('Language Proficiency')
    p.body_text('General knowledge of English, written and spoken is necessary to participate in our programs. The reasonable level of language proficiency required to succeed in our programs has been determined to be a reading and writing ability equivalent to the 10th grade level.')
    p.body_text('Instructions will be given in no language other than English. This institution does not provide ESL instruction.')

    p.section_title('Accreditation Status')
    p.body_text('This institution is not accredited by an accrediting agency recognized by the United States Department of Education. A student enrolled in an unaccredited institution is not eligible for federal financial aid.')

    p.section_title('STRF Disclosure')
    p.body_text('"The State of California established the Student Tuition Recovery Fund (STRF) to relieve or mitigate economic loss suffered by a student in an educational program at a qualifying institution, who is or was a California resident while enrolled, or was enrolled in a residency program, if the student enrolled in the institution, prepaid tuition, and suffered an economic loss. Unless relieved of the obligation to do so, you must pay the state-imposed assessment for the STRF, or it must be paid on your behalf, if you are a student in an educational program, who is a California resident, or are enrolled in a residency program, and prepay all or part of your tuition.')
    p.body_text('You are not eligible for protection from the STRF and you are not required to pay the STRF assessment, if you are not a California resident, or are not enrolled in a residency program."')
    p.body_text('"It is important that you keep copies of your enrollment agreement, financial aid documents, receipts, or any other information that documents the amount paid to the school. Questions regarding the STRF may be directed to the Bureau for Private Postsecondary Education, 1747 N. Market Blvd., Suite 225, Sacramento, CA 95834, (916) 574-8900 or (888) 370-7589."')

    p.section_title('Privacy Act')
    p.body_text("It is this institution's intent to carefully follow the rules applicable under the Family Education Rights and Privacy Act. It is our intent to protect the privacy of a student's financial, academic and other school records. We will not release such information to any individual without having first received the student's written request to do so, or unless otherwise required by law.")

    p.section_title('Student Conduct')
    p.body_text('Students are expected to behave professionally and respectfully at all times. Students are subject to dismissal for any inappropriate or unethical conduct or for any act of academic dishonesty. Students may be dismissed for reasons including, but not limited to:')
    p.bullet_list(['Coming to class in an intoxicated or drugged state.', 'Possession of drugs or alcohol on campus.', 'Possession of a weapon on campus.', 'Behavior creating a safety hazard to other person(s).', 'Disobedient or disrespectful behavior to other students, an administrator or instructor.', 'Stealing or damaging the property of another.'])

    p.section_title('Nondiscrimination Policy')
    p.body_text("This institution is committed to providing equal opportunities to all applicants to programs and to all applicants for employment. Therefore, no discrimination shall occur in any program or activity of this institution on the basis of race, color, religion, religious beliefs, national origin, sex, sexual orientation, marital status, pregnancy, age, disability, veteran's status, or any other classification that precludes a person from consideration as an individual.")

    p.section_title('Academic Freedom')
    p.body_text('Premium Barber College is committed to assuring full academic freedom to all faculty. The college encourages its faculty members to exercise their individual judgments regarding the content of the assigned courses, organization of topics and instructional methods. Students and faculty members alike are encouraged to freely express views, however controversial, as long as they believe it would advance understanding in their specialized discipline.')

    p.section_title('Sexual Harassment')
    p.body_text("This institution is committed to providing a work environment that is free of discrimination, intimidation and harassment. No one associated with this institution may engage in verbal abuse of a sexual nature; use sexually degrading or graphic words to describe an individual or an individual's body; or display sexually suggestive objects or pictures at any facility or other venue associated with this institution.")

    p.section_title("Student's Right to Cancel")
    p.body_text('The student shall have the right to cancel the agreement and receive a full refund pursuant to section 71750 through attendance at the first class session, or the seventh day after enrollment, whichever is later. Cancellation is effective on the date written notice of cancellation is sent by email to Efren Hernandez, premiumbarbercollege@gmail.com.')

    p.section_title('Withdrawal Policy')
    p.sub_title('Withdrawals Initiated by the Student')
    p.body_text("A withdrawal may be effectuated by the student's written notice sent by email to Efren Hernandez, premiumbarbercollege@gmail.com. The effective date of the student's withdrawal shall be the date it is received by the institution.")
    p.sub_title('Withdrawals Initiated by the Institution')
    p.body_text('Students may be administratively withdrawn for the following reasons:')
    p.bullet_list(['Disruptive and/or offensive and inappropriate behavior', 'Plagiarism and cheating', 'Being absent for more than seven (7) consecutive calendar days with no communication'])

    p.section_title('Refund Policy')
    p.body_text("This institution shall refund any credit balance on the student's account within 45 days after the date of the student's cancellation of, completion of, or withdrawal from, the educational program.")
    p.sub_title('Cancellation Refund')
    p.body_text('If a student cancels their enrollment, this institution shall refund 100 percent of the amount paid for institutional charges, less a reasonable deposit or application fee not to exceed two hundred fifty dollars ($250).')
    p.sub_title('Withdrawal Refund')
    p.body_text('A pro rata refund shall be no less than the total amount owed by the student for the portion of the educational program provided subtracted from the amount paid by the student.')

    p.section_title('Financial Aid Disclosures')
    p.body_text('This institution does not participate in any federal or state financial aid programs. A student enrolled in an unaccredited institution is not eligible for federal financial aid programs. The school does not provide financial aid directly to its students.')

    p.section_title('Grades and Standards for Student Achievement')
    p.body_text('Pass/fail scores are utilized for all skills examinations, quizzes, and the final examination. Students must receive passing grades on all skills examinations and achieve an 80% or better on the final exam to successfully pass the program.')
    p.sub_title('Grading Scale')
    p.table_row(['Component', 'Weight'], bold=True, bg=True)
    p.table_row(['Practical Skills', '30%'])
    p.table_row(['Theory Quizzes', '25%'], bg=True)
    p.table_row(['Final Exam', '35%'])
    p.table_row(['Participation/Attendance', '10%'], bg=True)
    p.table_row(['Total', '100%'], bold=True)
    p.ln(4)
    p.sub_title('Pass/Fail Scale')
    p.table_row(['Type', 'Grade Scale', 'Grade'], bold=True, bg=True)
    p.table_row(['Quizzes/Tests/Final', '80 and Above', 'Pass'])
    p.table_row(['Quizzes/Tests/Final', '79 & Below', 'Fail'], bg=True)
    p.table_row(['Skills Assessment', '90 and Above', 'Pass'])
    p.table_row(['Skills Assessment', '89 & Below', 'Fail'], bg=True)

    p.section_title('Evaluation Policies')
    p.body_text('Grades are awarded on a pass/fail basis. Students must achieve a "pass" rating on all quizzes and skill demonstrations. All students will be required to pass the final skills examinations with 90% proficiency.')

    p.section_title('Attendance Policy')
    p.body_text('Students are required to attend 100% of the required hours of instruction throughout the entire program. When a student falls below 80% attendance they will be given a verbal warning. When a student falls below 75% attendance they will be placed on probation. Students who arrive more than 10 minutes late will receive an unexcused absence for that class period.')

    p.section_title('Academic Probation and Dismissal')
    p.body_text('The Chief Academic Officer may place a student on academic probation if the student is not making satisfactory academic progress. After the completion of the current module, the student will have two additional modules to bring their pass/fail percentage up to the minimum standard. Failure to achieve satisfactory academic progress may result in dismissal from the program.')

    p.section_title('Leaves of Absence')
    p.body_text('It is the policy of the school to not grant a Leave of Absence to students. The school director may grant a leave of absence after determining that good cause is shown. A student may have no more than two leaves of absence in a 12-month calendar period, and may be on leave of absence no more than 30 calendar days during that 12-month calendar period.')

    p.section_title('Student Grievance Procedures')
    p.body_text("Most problems or complaints that students may have with the school can be resolved through a personal meeting with the student's instructor or a counselor. If this action does not resolve the matter, the student may submit a written complaint to the main campus: Premium Barber College, 461 S Capitol Ave #17 San Jose, CA 95127.")
    p.body_text('Continued unresolved complaints may be directed to: Bureau for Private Postsecondary Education, P.O. Box 980818, West Sacramento, CA 95798-0818, Phone: (916) 574-8900, Web: www.bppe.ca.gov')

    p.section_title('Student Services')
    p.body_text("This institution maintains a focus on the delivery of educational services. Should a student encounter personal problems which interfere with his or her ability to complete coursework, this institution will provide assistance in identifying appropriate professional assistance in the student's local community.")

    p.section_title('Placement Services')
    p.body_text('This institution provides placement assistance for all graduate students who wish to use the service. No guarantee of placement can be made. Services may include:')
    p.bullet_list(['Assistance with employment interviewing and job applications', 'Direct employer referrals', 'Information regarding job market and employment trends', 'Employment seeking skills'])

    p.section_title('Student Housing')
    p.body_text('This institution does not operate dormitories or other housing facilities. Housing in the immediate area is available in two story walkup and garden apartments. Monthly rent for a one bedroom unit is approximately $2,000 a month.')

    p.section_title('Student Records and Transcripts')
    p.body_text("Student records for all students are kept for five years. Transcripts are kept permanently. Students may inspect and review their educational records by submitting a written request. Transcripts will only be released to the student upon receipt of a written request bearing the student's live signature.")

    p.section_title('Requirements for Eligibility for Licensure')
    p.body_text('Licensure is a goal of the program. The program requires the completion of a Board approved course of instruction and achievement of a passing grade on a Board of Barbering and Cosmetology administered exam.')
    p.sub_title('Eligibility Requirements')
    p.bullet_list(['Complete 1,000 hours in a Board approved school', 'Be at least 17 years of age', 'Completed the 10th grade in a public school or its equivalency', 'Committed no acts or crimes constituting grounds for denial of licensure under Section 480 of the Business and Professions Code', 'Have a valid Social Security number before taking the examination'])
    p.body_text('The license will be granted by the Barbering & Cosmetology Board only after the student has successfully completed and graduated from the Barber course and passed the examination with an overall average score of 75%. The Board requires a $125 non-refundable initial license fee.')

    p.section_title('Charges: Tuition & Fees')
    p.body_text('All fees are subject to change from time to time, without notice.')
    p.table_row(['Item', 'Amount'], bold=True, bg=True)
    p.table_row(['Tuition', '$9,590'])
    p.table_row(['Registration Fee (non-refundable)', '$250'], bg=True)
    p.table_row(['STRF ($0/$1000)', '$0'])
    p.table_row(['CIMA License', '$350'], bg=True)
    p.table_row(['Kits', '$60'])
    p.table_row(['Total Program Charges', '$10,250.00'], bold=True, bg=True)
    p.ln(4)
    p.body_text('Transfer of Credit Fee (if applicable): $100')
    p.body_text('Licensure fees are the responsibility of the student and are paid directly to the State. Barbering license fee: $125.')

    p.section_title('Faculty')
    p.body_text('All faculty members demonstrate the professionalism and excellent communication skills required of an effective teacher, and are all required to have at minimum 3 years of experience in the beauty industry.')
    p.body_text('Efren Hernandez - 17 years of experience as a barber and shop owner.')
    p.body_text('Jose Flores - 16 years of experience as a barber.')

    p.section_title('Programs')
    p.sub_title('Barber Program')
    p.body_text('Total Clock Hours: 1,000 | Job Classification: SOC 39-5011 | No externship required.')
    p.body_text('This program covers all aspects of barbering, including hair styling, chemical hair services, and beard shaving and trimming techniques. Successful completion of this program will make the graduate eligible to take their licensure exam and obtain a Barbering license and pursue employment in the field.')
    p.body_text('Graduation Requirements: Complete at least a 70% cumulative grade average and pass the final skills exam.')
    p.sub_title('Program Mission and Objectives')
    p.body_text('Upon completion of this program the student will have the ability to perform the following:')
    p.bullet_list(['Acquire knowledge of laws and rules pertaining to health and safety and best practices for infection control and prevention', 'Demonstrate proper sanitation and sterilization of implements and workspace', 'Understand general theory topics of Barbering', 'Understand and demonstrate the proper use of implements relative to all Barbering services', 'Acquire the skill for analyzing the hair and skin prior to all services', 'Use appropriate terminology used in performing all Barbering services', 'Execute proper and accurate procedures in hair and shaving services', 'Develop appreciation of good workmanship common to Barbering'])
    p.sub_title('Health & Safety')
    p.bullet_list(['Infection Control & Regulations', 'Principles of Infection Prevention Measures', 'Chemicals and your Health / Safety Data Sheets', 'Safe Chemical Handling in the Establishment', 'Communicable Diseases: Prevent the Spread', 'Health and Safety Laws and Agencies', 'Ergonomics: Fitting the Job to the Person', "Worker's Rights / Sexual & Physical Assault Awareness", 'Disinfection and Sanitation', 'Proper Hand Washing / Disinfectants', 'Standard protection precautions / Personal protective equipment'])
    p.sub_title('Chemical Hair Services')
    p.bullet_list(['Hair Analysis & Predisposition', 'How chemical services affect the structure of hair', 'Techniques for permanent waving & soft curl permanents', 'Chemical hair relaxers/straightening techniques & safety precautions', 'Hair color consultation & strand tests', 'Alternative hair coloring techniques: Balayage, Ombre', 'Proper mixing and formulation / Application of hair color', 'Bleaching: How to use lighteners', 'Color correction and effective use of dye removers'])
    p.sub_title('Hairstyling Services')
    p.bullet_list(['Styling and arranging of various hair lengths and styles', 'Pin curls, roller curls, hair wrapping', 'Master comb-out techniques', 'Basic blow dry styling & thermal hair straightening', 'Curling iron techniques / Safety in thermal hairstyling', 'Shampooing principles and techniques', 'Basic haircutting techniques (wet and dry)', 'Proper use of shears, razors, electrical clippers and trimmers, thinning shears', 'Posture and body position'])
    p.sub_title('Shaving and Trimming of the Beard')
    p.bullet_list(['Shaving Safety Considerations / Tools and Product Knowledge', 'Station Setup / Preparing the client for a shave', 'Effective skin condition assessment', 'Standard shave procedures and techniques', 'Facial without shave (including traditional massage and rolling cream massage techniques)', 'Facial with shave, including application of aftershave antiseptic'])

    p.section_title('Required Disclosures')
    p.body_text('The policy of this institution is to update the official school catalog annually, in January of each year.')
    p.body_text("This institution is a private institution. The school was granted institutional approval to operate by the Bureau of Private Post Secondary Education (BPPE). The Bureau's approval means compliance with state standards set forth in CEC and 5, CCR. This approval does not mean that the institution or its educational programs are endorsed or recommended by the state or by the bureau, nor that the approval to operate indicates that the institution exceeds minimum state standards.")
    p.body_text('This institution has not had a pending petition in bankruptcy, is not operating as a debtor in possession, has not filed a bankruptcy petition within the preceding five years, and has not had a petition in bankruptcy filed against it within the preceding five years that resulted in reorganization under Chapter 11 of the United States Bankruptcy Code.')
    p.body_text('As a prospective student, you are encouraged to review this catalog prior to signing an enrollment agreement. You are also encouraged to review the School Performance Fact Sheet, which must be provided to you prior to signing an enrollment agreement.')
    p.body_text('If a student obtains a loan to pay for an educational program, the student will have the responsibility to repay the full amount of the loan plus interest, less the amount of any refund.')
    p.body_text('Any questions a student may have regarding this catalog may be directed to the Bureau for Private Postsecondary Education at 1747 North Market, Suite 225 Sacramento, CA 95834, P.O. Box 980818, West Sacramento, CA 95798, www.bppe.ca.gov, toll free telephone number (888) 370-7589, Fax (916) 263-1897.')
    p.body_text('A student or any member of the public may file a complaint about this institution with the Bureau by calling (888) 370-7589 or by completing a complaint form at www.bppe.ca.gov.')
    p.body_text('The Office of Student Assistance and Relief is available to support students. Contact: (888) 370-7589, option 5 or visit https://osar.bppe.ca.gov.')


# ===========================================================================
# PASS 1: Dummy render (no TOC) to discover where each section lands
# ===========================================================================
pass1 = CatalogPDF()
pass1.set_auto_page_break(auto=True, margin=20)

# Page 1: cover (same as final)
pass1.add_page()
pass1.ln(20)
pass1.image('/Users/sundalal/premium-barber-college/public/logo.png', x=30, w=150)
pass1.ln(12)
pass1.ln(12)
pass1.set_font('Helvetica', '', 12)
pass1.cell(0, 8, ' ', align='C')
pass1.ln(6)
pass1.cell(0, 8, ' ', align='C')
pass1.ln(20)
pass1.set_font('Helvetica', 'B', 26)
pass1.cell(0, 12, ' ', align='C')
pass1.ln(10)
pass1.set_font('Helvetica', '', 14)
pass1.cell(0, 8, ' ', align='C')

# Page 2: dummy TOC placeholder (simulate the space it takes)
pass1.add_page()
pass1.ln(4)
pass1.set_font('Helvetica', 'B', 22)
pass1.cell(0, 10, 'Table of Contents', align='C')
pass1.ln(10)
pass1.ln(8)
pass1.set_font('Helvetica', '', 11)
for entry in TOC_ENTRIES:
    pass1.cell(160, 7, entry)
    pass1.cell(20, 7, '00', align='R')
    pass1.ln(7)
    if pass1.get_y() > 270:
        pass1.add_page()
        pass1.ln(4)

# Pages 3+: content
render_all_content(pass1)

# Now section_final_pages has the correct page numbers from the final layout
print('Pass 1 complete. Section pages:')
for title, pg in section_final_pages.items():
    print(f'  p{pg}: {title}')

# ===========================================================================
# PASS 2: Real render with correct TOC links
# ===========================================================================
toc_links.clear()
recorded_pages = dict(section_final_pages)
section_final_pages.clear()

pdf = CatalogPDF()
pdf.set_auto_page_break(auto=True, margin=20)

# Pre-create all link objects with temporary destinations (will be overridden)
for entry in TOC_ENTRIES:
    link_id = pdf.add_link()
    pdf.set_link(link_id, y=0, page=1)
    toc_links[entry] = link_id

# Page 1: Cover
pdf.add_page()
pdf.ln(20)
pdf.image('/Users/sundalal/premium-barber-college/public/logo.png', x=30, w=150)
pdf.ln(12)
pdf.set_draw_color(*GOLD)
pdf.set_line_width(1.2)
pdf.line(60, pdf.get_y(), 150, pdf.get_y())
pdf.ln(12)
pdf.set_font('Helvetica', '', 12)
pdf.set_text_color(*LIGHT)
pdf.cell(0, 8, '461 S Capitol Ave #17  |  San Jose, CA 95127  |  (408) 649-3606', align='C')
pdf.ln(6)
pdf.cell(0, 8, 'www.premiumbarbercollege.com', align='C')
pdf.ln(20)
pdf.set_font('Helvetica', 'B', 26)
pdf.set_text_color(*DARK)
pdf.cell(0, 12, 'Course Catalog', align='C')
pdf.ln(10)
pdf.set_font('Helvetica', '', 14)
pdf.set_text_color(*LIGHT)
pdf.cell(0, 8, 'Period Covered: January 1, 2026 to December 31, 2026', align='C')

# Page 2: Table of Contents with links
pdf.add_page()
pdf.ln(4)
pdf.set_font('Helvetica', 'B', 22)
pdf.set_text_color(*DARK)
pdf.cell(0, 10, 'Table of Contents', align='C')
pdf.ln(10)
pdf.set_draw_color(*GOLD)
pdf.set_line_width(0.8)
pdf.line(10, pdf.get_y(), 200, pdf.get_y())
pdf.ln(8)

for entry in TOC_ENTRIES:
    page_str = str(recorded_pages.get(entry, '?'))

    pdf.set_font('Helvetica', '', 11)
    pdf.set_text_color(201, 168, 76)
    title_w = pdf.get_string_width(entry)
    dot_w = pdf.get_string_width('.')
    remaining = 158 - title_w
    num_dots = max(int(remaining / dot_w), 3)
    display = entry + ' ' + '.' * num_dots

    pdf.cell(160, 7, display, link=toc_links[entry])
    pdf.set_text_color(*BODY)
    pdf.cell(20, 7, page_str, align='R')
    pdf.ln(7)

    if pdf.get_y() > 270:
        pdf.add_page()
        pdf.ln(4)

# Pages 3+: Content (section_title will call set_link to bind destinations)
render_all_content(pdf)

# Validate all links were bound
print('\nPass 2 complete. Validating links:')
all_ok = True
for entry in TOC_ENTRIES:
    p1 = recorded_pages.get(entry, '?')
    p2 = section_final_pages.get(entry, '?')
    status = 'OK' if p1 == p2 else 'MISMATCH'
    if status != 'OK':
        all_ok = False
    print(f'  [{status}] "{entry}" TOC says p{p1}, actual p{p2}')

if all_ok:
    print('\nAll 34 TOC entries validated - links match destinations.')
else:
    print('\nWARNING: Some entries have mismatched pages!')

pdf.output('/Users/sundalal/premium-barber-college/public/catalog.pdf')
print('PDF saved to public/catalog.pdf')
