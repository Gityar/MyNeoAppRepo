
import { NursingCourse } from './types';

export const NEONATAL_COURSE: NursingCourse = {
  id: 'neonatal-care-01',
  title: 'Neonatal Nursing Excellence',
  sections: [
    {
      id: 'sec-1',
      title: 'Assessment & Transition',
      outline: [
        { 
          title: 'The Golden Minute', 
          content: 'The first 60 seconds of life are crucial for determining if a baby needs help breathing. Assessment of crying, tone, and gestational age happens simultaneously.' 
        },
        { 
          title: 'Apgar Score Interpretation', 
          content: 'Conducted at 1 and 5 minutes. 0-3: Severe distress, 4-6: Moderate difficulty, 7-10: Stable transition. It is NOT used to guide resuscitation, only to evaluate progress.' 
        },
        { 
          title: 'Anthropometric Measurements', 
          content: 'Includes Weight (avg 2.5-4kg), Length (avg 45-55cm), and Head Circumference (avg 33-35cm). Discrepancies may indicate IUGR or macrosomia.' 
        },
        { 
          title: 'Physical Exam: Head to Toe', 
          content: 'Inspection for birth trauma (Caput vs Cephalohematoma), skin integrity (vernix, lanugo), and cardiac murmurs which are often transient.' 
        }
      ],
      summary: 'Immediate care centers on rapid assessment of extrauterine transition, focusing on the ABCs and initial stabilization.',
      detailedContent: `
        Neonatal transition involves complex physiological shifts. The nurse's primary role is to monitor the 'three phases of transition': the period of reactivity, the period of sleep, and the second period of reactivity. 
        Effective assessment requires understanding normal variations like milia, mongolian spots, and erythema toxicum to avoid unnecessary parental alarm.
      `,
      quiz: [
        {
          id: 'q1-1',
          question: 'A newborn has blue extremities, heart rate 105, grimaces on suctioning, slow/irregular respirations, and active motion. Calculate the Apgar.',
          options: [
            { id: 'a', text: '6' }, { id: 'b', text: '7' }, { id: 'c', text: '8' }, { id: 'd', text: '9' }
          ],
          correctOptionId: 'b',
          explanation: 'Appearance(1) + Pulse(2) + Grimace(1) + Respiration(1) + Activity(2) = 7.'
        },
        {
          id: 'q1-2',
          question: 'Which measurement should be roughly 2cm larger than the chest circumference?',
          options: [
            { id: 'a', text: 'Abdominal circumference' }, { id: 'b', text: 'Head circumference' }, { id: 'c', text: 'Length' }, { id: 'd', text: 'Foot length' }
          ],
          correctOptionId: 'b',
          explanation: 'Head circumference is typically 33-35cm, while chest is 31-33cm.'
        },
        {
          id: 'q1-3',
          question: 'The presence of a "Caput Succedaneum" is best described as:',
          options: [
            { id: 'a', text: 'Bleeding under the periosteum' }, { id: 'b', text: 'Edema that crosses suture lines' }, { id: 'c', text: 'Congenital hydrocephalus' }, { id: 'd', text: 'Premature suture closure' }
          ],
          correctOptionId: 'b',
          explanation: 'Caput is soft tissue edema from labor pressure; it crosses suture lines, unlike cephalohematoma.'
        }
      ]
    },
    {
      id: 'sec-2',
      title: 'Essential Newborn Care (ENC)',
      outline: [
        { 
          title: 'Thermal Protection', 
          content: 'Immediate drying and skin-to-skin contact are primary. This prevents evaporation and conduction heat loss, which can cause hypoglycemia.' 
        },
        { 
          title: 'Hygienic Cord Care', 
          content: 'Keep the cord clean and dry. Avoid covering with a diaper. Modern evidence supports "dry care" over using alcohol or antiseptic.' 
        },
        { 
          title: 'Prophylactic Interventions', 
          content: 'Vitamin K (1mg IM) prevents VKDB, and Erythromycin ophthalmic ointment prevents ophthalmia neonatorum from undetected maternal infections.' 
        },
        { 
          title: 'Early Breastfeeding Initiation', 
          content: 'Ideally within the first hour. Colostrum provides essential IgA antibodies and acts as a natural laxative for meconium passage.' 
        }
      ],
      summary: 'ENC consists of universal practices including thermal care, cord hygiene, and infection prevention for every newborn.',
      detailedContent: `
        Essential Newborn Care (ENC) is a set of interventions designed to improve newborn health by reducing mortality from the three main causes: infections, birth asphyxia, and preterm birth complications. 
        Skin-to-skin (Kangaroo care) is not just for preemies; it stabilizes heart rate, breathing, and temperature in all infants.
      `,
      quiz: [
        {
          id: 'q2-1',
          question: 'What is the primary reason Vitamin K is administered to newborns?',
          options: [
            { id: 'a', text: 'To boost the immune system' }, { id: 'b', text: 'To prevent bleeding disorders' }, { id: 'c', text: 'To aid in digestion' }, { id: 'd', text: 'To promote bone growth' }
          ],
          correctOptionId: 'b',
          explanation: 'Babies are born with low Vitamin K levels, risking Vitamin K Deficiency Bleeding (VKDB).'
        },
        {
          id: 'q2-2',
          question: 'The first vaccine typically given at birth is:',
          options: [
            { id: 'a', text: 'BCG' }, { id: 'b', text: 'Hepatitis B' }, { id: 'c', text: 'OPV' }, { id: 'd', text: 'All of the above' }
          ],
          correctOptionId: 'd',
          explanation: 'In many regions, BCG, HepB, and OPV-0 are the "birth doses".'
        },
        {
          id: 'q2-3',
          question: 'The "Warm Chain" refers to:',
          options: [
            { id: 'a', text: 'Heated blankets only' }, { id: 'b', text: 'A series of steps to maintain temperature' }, { id: 'c', text: 'Using a high-wattage incubator' }, { id: 'd', text: 'Giving warm formula' }
          ],
          correctOptionId: 'b',
          explanation: 'The warm chain includes warm delivery room, immediate drying, skin-to-skin, delayed bathing, etc.'
        }
      ]
    },
    {
      id: 'sec-3',
      title: 'Neonatal Resuscitation',
      outline: [
        { 
          title: 'Initial Steps', 
          content: 'Provide warmth, position airway, clear secretions if needed, dry, and stimulate. These should take no more than 30 seconds.' 
        },
        { 
          title: 'Positive Pressure Ventilation (PPV)', 
          content: 'The most important step in resuscitation. Indicated if HR <100 or baby is apneic/gasping. Use 21% O2 for term babies initially.' 
        },
        { 
          title: 'MR. SOPA Corrective Steps', 
          content: 'Mask adjustment, Reposition airway, Suction mouth/nose, Open mouth, Pressure increase, Alternative airway. Used when PPV fails to rise the chest.' 
        },
        { 
          title: 'Chest Compressions', 
          content: 'Indicated if HR <60 despite 30s of effective PPV. 3:1 ratio (90 compressions and 30 breaths per minute).' 
        }
      ],
      summary: 'Resuscitation follows a strict algorithm focused on restoring effective ventilation, which is the cornerstone of neonatal recovery.',
      detailedContent: `
        The Neonatal Resuscitation Program (NRP) focuses on the "inverted pyramid" approach. Most babies respond to simple tactile stimulation and drying. 
        If PPV is required, the goal is to achieve adequate lung inflation. Effective PPV is identified by a rapidly rising heart rate.
      `,
      quiz: [
        {
          id: 'q3-1',
          question: 'What is the most effective indicator of successful PPV?',
          options: [
            { id: 'a', text: 'Improved skin color' }, { id: 'b', text: 'Rapidly increasing heart rate' }, { id: 'c', text: 'Spontaneous crying' }, { id: 'd', text: 'Increased muscle tone' }
          ],
          correctOptionId: 'b',
          explanation: 'The heart rate is the primary indicator of whether the lungs are being ventilated effectively.'
        },
        {
          id: 'q3-2',
          question: 'At what heart rate should chest compressions be initiated?',
          options: [
            { id: 'a', text: 'Below 100' }, { id: 'b', text: 'Below 80' }, { id: 'c', text: 'Below 60' }, { id: 'd', text: 'Below 40' }
          ],
          correctOptionId: 'c',
          explanation: 'NRP guidelines state chest compressions start if HR is <60 despite 30 seconds of effective PPV.'
        },
        {
          id: 'q3-3',
          question: 'In term babies, what oxygen concentration should PPV start with?',
          options: [
            { id: 'a', text: '21% (Room Air)' }, { id: 'b', text: '40%' }, { id: 'c', text: '60%' }, { id: 'd', text: '100%' }
          ],
          correctOptionId: 'a',
          explanation: 'Term babies should start with 21%. Preterm (<35wks) usually start with 21-30%.'
        }
      ]
    },
    {
      id: 'sec-4',
      title: 'Post-Resuscitation Care',
      outline: [
        { 
          title: 'The S.T.A.B.L.E. Program', 
          content: 'Six assessment modules: Sugar, Temperature, Airway, Blood pressure, Lab work, Emotional support. Essential for the post-arrest neonate.' 
        },
        { 
          title: 'Metabolic Monitoring', 
          content: 'Neonates use massive amounts of glucose during stress. Monitor for hypoglycemia and maintain euglycemia via IV glucose if necessary.' 
        },
        { 
          title: 'Therapeutic Hypothermia', 
          content: 'For babies with Hypoxic-Ischemic Encephalopathy (HIE). Body temperature is lowered to 33.5°C for 72 hours to prevent brain injury.' 
        },
        { 
          title: 'Family Support', 
          content: 'Nurses must facilitate bonding even in the NICU. Post-resuscitation is traumatic for parents; clear, empathetic communication is vital.' 
        }
      ],
      summary: 'Care continues after the acute event to stabilize systemic functions and provide neuroprotection for high-risk infants.',
      detailedContent: `
        The S.T.A.B.L.E. mnemonic helps nurses systematically stabilize a newborn for transport or continued NICU care. 
        Preventing secondary injury (like hyperoxia or hypoglycemia) is as important as the initial resuscitation. 
        Emotional support for the family should never be sidelined during clinical stabilization.
      `,
      quiz: [
        {
          id: 'q4-1',
          question: 'In the STABLE acronym, what does the "B" stand for?',
          options: [
            { id: 'a', text: 'Breathing' }, { id: 'b', text: 'Blood Pressure' }, { id: 'c', text: 'Bilirubin' }, { id: 'd', text: 'Brain health' }
          ],
          correctOptionId: 'b',
          explanation: 'The B stands for Blood Pressure (monitoring for shock and adequate perfusion).'
        },
        {
          id: 'q4-2',
          question: 'Therapeutic hypothermia should be initiated within how many hours of birth?',
          options: [
            { id: 'a', text: '2 hours' }, { id: 'b', text: '6 hours' }, { id: 'c', text: '12 hours' }, { id: 'd', text: '24 hours' }
          ],
          correctOptionId: 'b',
          explanation: 'To be effective for HIE, cooling must usually start within the first 6 hours of life.'
        },
        {
          id: 'q4-3',
          question: 'Lab work post-resuscitation often prioritizes which of the following?',
          options: [
            { id: 'a', text: 'Blood gas and Glucose' }, { id: 'b', text: 'Thyroid levels' }, { id: 'c', text: 'Bone density' }, { id: 'd', text: 'Vitamin D' }
          ],
          correctOptionId: 'a',
          explanation: 'Monitoring pH (acidosis) and Glucose (hypoglycemia) is critical for post-arrest stabilization.'
        }
      ]
    },
    {
      id: 'sec-5',
      title: 'Neonatal Health Problems',
      outline: [
        { 
          title: 'Respiratory Disorders', 
          content: 'Includes RDS (surfactant deficiency), TTN (wet lungs), and Meconium Aspiration Syndrome (MAS).' 
        },
        { 
          title: 'Infectious Diseases', 
          content: 'Early-onset sepsis (from mother) vs. Late-onset (hospital-acquired). Watch for lethargy, poor feeding, and temp instability.' 
        },
        { 
          title: 'Gastrointestinal Emergencies', 
          content: 'Necrotizing Enterocolitis (NEC) is the most common emergency. Omphalocele and Gastroschisis are primary surgical defects.' 
        },
        { 
          title: 'Neurological Issues', 
          content: 'Neonatal seizures can be subtle (eye deviation, lip smacking). IVH is graded 1-4, with grades 3-4 carrying higher risk of disability.' 
        }
      ],
      summary: 'Common neonatal pathologies require vigilance for subtle "soft signs" that often precede significant clinical deterioration.',
      detailedContent: `
        Neonatal nursing involves constant surveillance. A "quiet baby" might be an infected baby (sepsis) rather than a well-rested one. 
        Jaundice should be assessed visually every 8-12 hours, with TcB or TSB levels plotted on a nomogram to guide treatment.
      `,
      quiz: [
        {
          id: 'q5-1',
          question: 'Which condition is caused by a lack of surfactant in premature lungs?',
          options: [
            { id: 'a', text: 'TTN' }, { id: 'b', text: 'RDS' }, { id: 'c', text: 'MAS' }, { id: 'd', text: 'Pneumonia' }
          ],
          correctOptionId: 'b',
          explanation: 'Respiratory Distress Syndrome (RDS) is the classic "preemie lung" condition.'
        },
        {
          id: 'q5-2',
          question: 'Bile-stained (green) emesis is usually an indicator of:',
          options: [
            { id: 'a', text: 'Normal spit-up' }, { id: 'b', text: 'Intestinal obstruction' }, { id: 'c', text: 'Overfeeding' }, { id: 'd', text: 'Acid reflux' }
          ],
          correctOptionId: 'b',
          explanation: 'Bilious vomiting is a surgical emergency until proven otherwise in a neonate.'
        },
        {
          id: 'q5-3',
          question: 'What is a "soft sign" of neonatal sepsis?',
          options: [
            { id: 'a', text: 'Tachycardia' }, { id: 'b', text: 'Poor feeding' }, { id: 'c', text: 'Temperature instability' }, { id: 'd', text: 'All of the above' }
          ],
          correctOptionId: 'd',
          explanation: 'Sepsis signs are notoriously vague; tachycardia, poor feeding, and hypothermia are common.'
        }
      ]
    },
    {
      id: 'sec-6',
      title: 'Discharge Counseling',
      outline: [
        { 
          title: 'Safe Sleep (The ABCs)', 
          content: 'Alone, on their Back, in a clear Crib. No pillows, blankets, or bumpers. This significantly reduces SIDS risk.' 
        },
        { 
          title: 'Warning Signs (Danger Signs)', 
          content: 'Parents must seek help for: Fever (>38°C), lethargy, yellowing of skin, or breathing difficulties.' 
        },
        { 
          title: 'Nutrition & Elimination', 
          content: 'Expect 6-8 wet diapers and 3-4 stools per day by age 1 week. Breastfed babies may have very loose, seedy stools.' 
        },
        { 
          title: 'Follow-up Care', 
          content: 'First pediatric visit should be within 48-72 hours of discharge to check for jaundice and weight regain.' 
        }
      ],
      summary: 'Discharge care bridges the gap between the controlled hospital environment and the home, empowering parents with safety knowledge.',
      detailedContent: `
        Discharge is not a single event but a process that starts at admission. The "Back to Sleep" campaign is the most vital educational component. 
        Ensuring the car seat is installed correctly and that parents understand how to identify a sick infant are critical nursing priorities.
      `,
      quiz: [
        {
          id: 'q6-1',
          question: 'To prevent SIDS, what is the recommended sleeping position for an infant?',
          options: [
            { id: 'a', text: 'Prone (Stomach)' }, { id: 'b', text: 'Lateral (Side)' }, { id: 'c', text: 'Supine (Back)' }, { id: 'd', text: 'In a car seat' }
          ],
          correctOptionId: 'c',
          explanation: 'Supine (Back) sleep is the gold standard for safety.'
        },
        {
          id: 'q6-2',
          question: 'At what temperature should parents be instructed to call the doctor immediately?',
          options: [
            { id: 'a', text: '37.0°C (98.6°F)' }, { id: 'b', text: '37.5°C (99.5°F)' }, { id: 'c', text: '38.0°C (100.4°F) or higher' }, { id: 'd', text: '36.5°C (97.7°F)' }
          ],
          correctOptionId: 'c',
          explanation: 'A rectal temp of 38.0°C (100.4°F) is considered a fever in a neonate and requires investigation.'
        },
        {
          id: 'q6-3',
          question: 'How many wet diapers should a 1-week-old infant have per day?',
          options: [
            { id: 'a', text: '1-2' }, { id: 'b', text: '3-4' }, { id: 'c', text: '6-8' }, { id: 'd', text: 'More than 15' }
          ],
          correctOptionId: 'c',
          explanation: '6 to 8 heavy wet diapers indicate adequate intake.'
        }
      ]
    }
  ]
};
