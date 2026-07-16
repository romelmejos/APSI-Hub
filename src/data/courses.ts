/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course } from "../types";

export const COURSES: Course[] = [
  {
    id: "CS-101",
    title: "Deep Learning & Neural Networks",
    subtitle: "Master deep learning algorithms, CNNs, Transformers, and custom model training.",
    category: "Computer Science",
    subcategory: "Artificial Intelligence",
    difficulty: "Intermediate",
    duration: "18h 30m",
    durationHours: 18.5,
    rating: 4.8,
    reviewsCount: 1420,
    enrolledStudents: 12530,
    price: 89,
    image: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", // Blue gradient
    instructor: {
      id: "inst-1",
      name: "Dr. Andrew Lin",
      title: "Professor of Artificial Intelligence at Stanford",
      bio: "Dr. Andrew Lin is a pioneer in neural network research. He has worked with leading tech institutions and published over 50 papers on deep learning, computer vision, and transformers.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      rating: 4.9,
      coursesCount: 4,
      studentsCount: 142000
    },
    overview: "This course offers a rigorous mathematical and practical introduction to modern deep learning models. Starting from artificial neurons, we build our way up to multi-layer perceptrons, convolutional networks for visual processing, recurrent units for sequential text data, and the state-of-the-art transformer architectures underlying today's generative AI models. You will implement training loops from scratch and use industry standard frameworks.",
    outcomes: [
      "Understand the deep mathematical foundations of backpropagation and gradient descent.",
      "Build, train, and deploy custom Convolutional Neural Networks (CNNs) for computer vision.",
      "Understand Transformer architectures, self-attention mechanisms, and NLP workflows.",
      "Diagnose training bottlenecks (overfitting, vanishing gradients) using standard visual metrics."
    ],
    curriculum: [
      {
        id: "cs-m1",
        title: "Module 1: Foundations of Deep Learning",
        lessons: [
          {
            id: "cs-l1",
            title: "1.1 Introduction to Deep Learning & Artificial Neurons",
            duration: "15:45",
            durationSeconds: 945,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Explore the biological inspiration of deep learning, the anatomy of an artificial neuron, and how activation functions introduce non-linearity into complex model networks."
          },
          {
            id: "cs-l2",
            title: "1.2 Understanding Forward and Backpropagation",
            duration: "24:12",
            durationSeconds: 1452,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Step-by-step breakdown of how data moves forward in a network, how prediction error is calculated, and how gradient descent updates model weights via the chain rule."
          },
          {
            id: "cs-l3",
            title: "1.3 Activation Functions & Loss Functions",
            duration: "18:20",
            durationSeconds: 1100,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Deep dive into Sigmoid, Tanh, ReLU, and Softmax activation functions, and choosing the right loss function (Cross-Entropy, MSE) for different problem domains."
          }
        ]
      },
      {
        id: "cs-m2",
        title: "Module 2: Convolutional Neural Networks (CNNs)",
        lessons: [
          {
            id: "cs-l4",
            title: "2.1 Spatial Hierarchy & Convolution Operations",
            duration: "22:15",
            durationSeconds: 1335,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Learn how the convolution operation acts as a local feature detector, why spatial weight sharing is efficient, and how image filters capture edges, shapes, and patterns."
          },
          {
            id: "cs-l5",
            title: "2.2 Max Pooling, Padding, and Strides",
            duration: "17:40",
            durationSeconds: 1060,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Master hyperparameter tuning in CNN layers: how padding controls boundary leakage, strides affect feature map downsampling, and pooling improves spatial invariance."
          }
        ]
      },
      {
        id: "cs-m3",
        title: "Module 3: Modern NLP & Transformers",
        lessons: [
          {
            id: "cs-l6",
            title: "3.1 Self-Attention and the Transformer Revolution",
            duration: "30:10",
            durationSeconds: 1810,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Analyze the core self-attention mechanism: calculating Query, Key, and Value vectors, multi-head attention blocks, and how they solve sequential dependency issues."
          }
        ]
      }
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "Liam Carter",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=80",
        rating: 5,
        comment: "Excellent theoretical clarity and practical notebooks! Dr. Andrew explains the backpropagation mathematics better than any textbook I have ever read. Truly a top-tier course.",
        date: "2026-06-15"
      },
      {
        id: "rev-2",
        studentName: "Chloe Davenport",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80",
        rating: 4,
        comment: "Very challenging but extremely rewarding. The programming exercises helped me build my own transformer network from scratch. Highly recommend to all CS students.",
        date: "2026-05-28"
      }
    ],
    featured: true
  },
  {
    id: "ECON-302",
    title: "Behavioral Economics & Decision Making",
    subtitle: "Examine cognitive biases, prospect theory, nudging, and consumer decision architectures.",
    category: "Business & Finance",
    subcategory: "Economics",
    difficulty: "Beginner",
    duration: "12h 15m",
    durationHours: 12.25,
    rating: 4.7,
    reviewsCount: 890,
    enrolledStudents: 6340,
    price: 49,
    image: "linear-gradient(135deg, #10b981 0%, #047857 100%)", // Emerald gradient
    instructor: {
      id: "inst-2",
      name: "Prof. Sarah Jenkins",
      title: "Behavioral Economics Researcher at Yale",
      bio: "Sarah Jenkins leads behavioral decision-making labs. Her experiments on consumer psychology and choice architecture have advised various global banks and policy units.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
      rating: 4.8,
      coursesCount: 2,
      studentsCount: 38200
    },
    overview: "Classical economics assumes people are perfectly rational utility-maximizing actors. Behavioral economics shows we are predictably irrational. This course explores systemic cognitive biases, heuristics of judgement, framing, prospect theory, and the powerful applications of nudging to improve financial decision-making, digital interfaces, and civic environments.",
    outcomes: [
      "Contrast classical rational choice theory with empirically proven cognitive heuristics.",
      "Analyze consumer behavior using loss aversion and Prospect Theory equations.",
      "Design effective choice architecture and nudge solutions for public policy and tech products.",
      "Identify framing and anchoring tactics used in commercial market positioning."
    ],
    curriculum: [
      {
        id: "econ-m1",
        title: "Module 1: Classical Rationality vs. Behavioral Reality",
        lessons: [
          {
            id: "econ-l1",
            title: "1.1 Introduction to Behavioral Economics",
            duration: "14:15",
            durationSeconds: 855,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Understand the historical friction between classical economics (Homo Economicus) and behavioral observations of human cognitive shortcuts."
          },
          {
            id: "econ-l2",
            title: "1.2 System 1 vs. System 2 Thinking Processes",
            duration: "18:40",
            durationSeconds: 1120,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "A deep dive into Daniel Kahneman's cognitive framework: the fast, intuitive System 1 and the slow, deliberate, effortful System 2."
          }
        ]
      },
      {
        id: "econ-m2",
        title: "Module 2: Heuristics, Biases & Prospect Theory",
        lessons: [
          {
            id: "econ-l3",
            title: "2.1 Anchoring, Availability, and Representation",
            duration: "21:10",
            durationSeconds: 1270,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "How numerical reference points anchor judgements, how recent events skew risk estimation, and how stereotypes influence logical probability."
          },
          {
            id: "econ-l4",
            title: "2.2 Prospect Theory: Risk Preferences & Loss Aversion",
            duration: "25:30",
            durationSeconds: 1530,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Deconstruct Kahneman and Tversky's Prospect Theory. Learn why losses pain us twice as much as equivalent gains satisfy us, and the asymmetry of risk curves."
          }
        ]
      },
      {
        id: "econ-m3",
        title: "Module 3: Nudging & Choice Architecture",
        lessons: [
          {
            id: "econ-l5",
            title: "3.1 Choice Architecture and Digital Nudges",
            duration: "22:00",
            durationSeconds: 1320,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "How to structure layouts, defaults, and option hierarchies to guide beneficial user choices without restricting their liberty or removing options."
          }
        ]
      }
    ],
    reviews: [
      {
        id: "rev-3",
        studentName: "Sophia Martinez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=80",
        rating: 5,
        comment: "This course totally reshaped how I view human decision-making. Prof. Jenkins delivers engaging lectures and uses very practical business and policy case studies.",
        date: "2026-07-01"
      }
    ],
    featured: true
  },
  {
    id: "BIO-205",
    title: "Introduction to Cognitive Neuroscience",
    subtitle: "Explore functional neuroanatomy, neuroimaging, memory consolidation, and perception.",
    category: "Health & Sciences",
    subcategory: "Neuroscience",
    difficulty: "Intermediate",
    duration: "15h 45m",
    durationHours: 15.75,
    rating: 4.9,
    reviewsCount: 740,
    enrolledStudents: 4920,
    price: 0, // Free course
    image: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)", // Violet gradient
    instructor: {
      id: "inst-3",
      name: "Dr. Marcus Vance",
      title: "Associate Professor of Brain Sciences at MIT",
      bio: "Dr. Vance is a primary cognitive neuroscientist working with fMRI and EEG. His research investigates neural mechanisms of sensory integration, spatial orientation, and spatial mapping.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
      rating: 4.9,
      coursesCount: 3,
      studentsCount: 22400
    },
    overview: "How does a physical organ with billions of neurons give rise to conscious experience, memory, and emotional feeling? This intermediate course bridges biology and cognitive psychology. We trace sensory signals as they enter the nervous system, study how visual stimuli are decoded in the occipital lobe, map out the brain circuits involved in memory creation, and evaluate modern brain imaging methodologies like fMRI, EEG, and TMS.",
    outcomes: [
      "Identify major anatomical brain structures and locate specialized cortical regions.",
      "Deconstruct cellular action potentials, ion channels, and synaptic chemical transmission.",
      "Map out visual, auditory, and motor pathways from peripheral sensors to the cortex.",
      "Contrast fMRI, EEG, and lesion studies based on temporal and spatial measurement resolution."
    ],
    curriculum: [
      {
        id: "bio-m1",
        title: "Module 1: Cellular Bases & Neuroanatomy",
        lessons: [
          {
            id: "bio-l1",
            title: "1.1 The Neuron: Membrane Potential and the Synapse",
            duration: "16:20",
            durationSeconds: 980,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Learn how the resting potential of neurons is maintained, how electrical pulses travel, and how neurotransmitters cross the synaptic cleft."
          },
          {
            id: "bio-l2",
            title: "1.2 Functional Geography of the Cerebral Cortex",
            duration: "21:15",
            durationSeconds: 1275,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Explore the frontal, parietal, temporal, and occipital lobes. Understand what happens during lesions to Broca's area, Wernicke's, and the amygdala."
          }
        ]
      },
      {
        id: "bio-m2",
        title: "Module 2: Cognitive Processes & Neuroimaging",
        lessons: [
          {
            id: "bio-l3",
            title: "2.1 Visual Decoding and Face Representation",
            duration: "19:50",
            durationSeconds: 1190,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "How light signals traveling through the optic nerve are reconstructed into shapes, motions, and facial identities in the Fusiform Face Area (FFA)."
          },
          {
            id: "bio-l4",
            title: "2.2 The Hippocampus, Memory Consolidation, & LTP",
            duration: "26:30",
            durationSeconds: 1590,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Analyze the cellular mechanism of learning (Long-Term Potentiation), spatial memory mapping, and how short-term experiences become permanent cortex memories."
          },
          {
            id: "bio-l5",
            title: "2.3 Neuroimaging Methodologies: fMRI vs. EEG",
            duration: "24:10",
            durationSeconds: 1450,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "How we look inside the living brain: understand spatial resolution of fMRI BOLD signals and sub-millisecond temporal resolution of scalp EEG potentials."
          }
        ]
      }
    ],
    reviews: [
      {
        id: "rev-4",
        studentName: "Isabella Rossi",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80",
        rating: 5,
        comment: "This is hands-down the best introductory neuroscience course I have taken. The explanation of neural action potentials and Long-Term Potentiation (LTP) was exceptionally vivid and clear.",
        date: "2026-06-20"
      },
      {
        id: "rev-5",
        studentName: "Ethan Patel",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80",
        rating: 4.8,
        comment: "A highly informative, rigorous syllabus. Dr. Vance has a great passion for brain science and teaches in a structured manner that keeps you hooked.",
        date: "2026-05-15"
      }
    ],
    featured: true
  },
  {
    id: "DS-201",
    title: "Practical Data Science with Python",
    subtitle: "Learn data wrangling, descriptive stats, regression, and tree-based classification models.",
    category: "Data Science",
    subcategory: "Machine Learning",
    difficulty: "Beginner",
    duration: "22h 10m",
    durationHours: 22.16,
    rating: 4.6,
    reviewsCount: 2110,
    enrolledStudents: 18450,
    price: 99,
    image: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", // Amber/Orange gradient
    instructor: {
      id: "inst-4",
      name: "Dr. Clara Alvarez",
      title: "Data Scientist and Lecturer at UC Berkeley",
      bio: "Dr. Alvarez specializes in predictive modeling and big data diagnostics. She spent several years at Netflix as a lead analyst and now teaches core data science tracks.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
      rating: 4.7,
      coursesCount: 3,
      studentsCount: 95400
    },
    overview: "Every modern decision is backed by data. This massive, code-along course equips you with complete Python mastery for data analytical work. You will learn data cleansing, exploratory visualization, robust statistical tests, and machine learning models (Linear/Logistic Regression, K-Means Clustering, and Random Forests) to solve concrete business predictions.",
    outcomes: [
      "Manipulate, clean, and consolidate fragmented relational tables with Pandas.",
      "Construct predictive supervised machine learning models with Scikit-Learn.",
      "Optimize predictive performance by tuning model hyperparameters and cross-validation.",
      "Deliver data-driven business insights using interactive visualization libraries."
    ],
    curriculum: [
      {
        id: "ds-m1",
        title: "Module 1: Wrangling Data with Pandas",
        lessons: [
          {
            id: "ds-l1",
            title: "1.1 Setting up Anaconda and Jupyter Environments",
            duration: "12:10",
            durationSeconds: 730,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Step-by-step guidance on setting up python libraries, installing packages, launching Jupyter server, and exploring basic cell commands."
          },
          {
            id: "ds-l2",
            title: "1.2 Handling Missing Values and Vectorized Operations",
            duration: "24:50",
            durationSeconds: 1490,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Understand the strategy for imputing missing data, dropping null observations, and optimizing speeds via Pandas vectorized manipulations."
          }
        ]
      },
      {
        id: "ds-m2",
        title: "Module 2: Supervised Machine Learning Models",
        lessons: [
          {
            id: "ds-l3",
            title: "2.1 Logistic Regression for Binary Classification",
            duration: "28:15",
            durationSeconds: 1695,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Understand classification math: mapping odds ratios using logits, sigmoid squeezing, and predicting binary decisions (churn/retention)."
          },
          {
            id: "ds-l4",
            title: "2.2 Random Forests & Hyperparameter Optimization",
            duration: "32:45",
            durationSeconds: 1965,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Deconstruct decision ensemble trees. Use GridSearchCV to search for ideal leaf depths, tree counts, and splitting thresholds to improve predictions."
          }
        ]
      }
    ],
    reviews: [
      {
        id: "rev-6",
        studentName: "Matthew King",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=80",
        rating: 4.5,
        comment: "Excellent pace for beginner coders! Every line of data wrangling is typed out slowly and explained conceptually. Great exercises at the end of every notebook.",
        date: "2026-07-10"
      }
    ],
    featured: false
  },
  {
    id: "ART-110",
    title: "UI/UX Design Fundamentals",
    subtitle: "Design stunning digital interfaces using typography, visual hierarchy, and prototyping.",
    category: "Creative Arts",
    subcategory: "User Experience",
    difficulty: "Beginner",
    duration: "14h 20m",
    durationHours: 14.33,
    rating: 4.9,
    reviewsCount: 1250,
    enrolledStudents: 9810,
    price: 59,
    image: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)", // Pink/Rose gradient
    instructor: {
      id: "inst-5",
      name: "Evelyn Sterling",
      title: "Design Director and Adjunct Professor at RISD",
      bio: "Evelyn is a visual director with 12 years of web design tenure. She has crafted user interfaces for top-tier digital products and teaches foundational UI/UX layouts globally.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
      rating: 4.9,
      coursesCount: 2,
      studentsCount: 43000
    },
    overview: "Every great digital experience begins with user research and exceptional visual design. This course covers the end-to-end design process, from low-fidelity paper wireframes to stunning, high-fidelity prototypes. You'll master typography pairings, layout grids, spacing rules, color palettes, and modern accessibility considerations to build interfaces users love.",
    outcomes: [
      "Conduct professional user interviews, synthesize feedback, and create active user personas.",
      "Apply strict typography scales, visual hierarchies, and grid systems.",
      "Build realistic high-fidelity interactive component mockups and navigation prototypes.",
      "Analyze interface contrast and access guidelines to pass visual AAA standards."
    ],
    curriculum: [
      {
        id: "art-m1",
        title: "Module 1: User Research & Low-Fidelity Layouts",
        lessons: [
          {
            id: "art-l1",
            title: "1.1 Introduction to User-Centric Design Frameworks",
            duration: "11:30",
            durationSeconds: 690,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Learn the core design cycle: Empathize, Define, Ideate, Prototype, Test, and how design is an iterative feedback loop."
          },
          {
            id: "art-l2",
            title: "1.2 Designing User Journeys and Layout Wireframes",
            duration: "20:15",
            durationSeconds: 1215,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "How to capture structural hierarchy on wireframes without getting distracted by custom typography, graphics, and interface colors."
          }
        ]
      },
      {
        id: "art-m2",
        title: "Module 2: Visual Systems & Typography",
        lessons: [
          {
            id: "art-l3",
            title: "2.1 Spatial Spacing, Grids, and the 8pt Padding Rule",
            duration: "16:40",
            durationSeconds: 1000,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Learn how to use consistent 8pt-based increments to establish spacing, alignment, visual rhythm, and balanced margins on a grid."
          },
          {
            id: "art-l4",
            title: "2.2 Designing Dark Mode & Multi-Device Responsive UI",
            duration: "23:50",
            durationSeconds: 1430,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Adapting layouts smoothly across mobile and desktop, choosing accessible dark canvas hues, and adjusting layout densities."
          }
        ]
      }
    ],
    reviews: [
      {
        id: "rev-7",
        studentName: "Maya Lin",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80",
        rating: 5,
        comment: "This is an aesthetic masterpiece of a course! Evelyn teaches with deep clarity. The 8pt grid lecture changed my web design process forever.",
        date: "2026-06-25"
      }
    ],
    featured: true
  },
  {
    id: "ENG-215",
    title: "Fiction & Narrative Craft",
    subtitle: "Master character development, dialogue pacing, story arcs, and world building.",
    category: "Creative Arts",
    subcategory: "Writing",
    difficulty: "Beginner",
    duration: "10h 30m",
    durationHours: 10.5,
    rating: 4.8,
    reviewsCount: 512,
    enrolledStudents: 3100,
    price: 0, // Free
    image: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)", // Teal gradient
    instructor: {
      id: "inst-6",
      name: "Julian Thorne",
      title: "Award-winning Novelist & Professor at Columbia",
      bio: "Julian Thorne has published four critically-acclaimed novels. He teaches narrative composition and creative writing seminars to undergraduate and graduate cohorts.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120",
      rating: 4.8,
      coursesCount: 1,
      studentsCount: 12300
    },
    overview: "Unleash your creative voice. This course teaches the practical mechanics of narrative prose. You'll move beyond raw inspiration and learn to manipulate tension, develop complex internal/external character conflicts, write realistic dialogue that contains rich subtext, and use deep sensory descriptions to build unforgettable settings.",
    outcomes: [
      "Master techniques of character-driven storytelling using detailed profiles.",
      "Draft dynamic, fast-paced dialogue that reveals subtext and drives tension.",
      "Map cohesive narrative arcs using the Hero's Journey and Three-Act systems.",
      "Inject multi-sensory setting descriptions that transport reader imagination."
    ],
    curriculum: [
      {
        id: "eng-m1",
        title: "Module 1: Building Compelling Characters",
        lessons: [
          {
            id: "eng-l1",
            title: "1.1 Internal Wants vs. External Goals",
            duration: "13:20",
            durationSeconds: 800,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Examine how compelling fictional characters are driven by internal psychological wounds (wants) that conflict with their external goals."
          },
          {
            id: "eng-l2",
            title: "1.2 Dialogue, Subtext, and Narrative Pacing",
            duration: "21:45",
            durationSeconds: 1305,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "How to avoid writing literal, flat dialogue. Learn to inject subtext, keep spoken exchanges snappy, and use dialogue tags as physical actions."
          }
        ]
      }
    ],
    reviews: [
      {
        id: "rev-8",
        studentName: "Daniel Vance",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80",
        rating: 5,
        comment: "An absolute treasure of a course for aspiring writers. Julian Thorne is incredibly reflective and provides deep writing prompts that got me writing immediately.",
        date: "2026-07-04"
      }
    ],
    featured: false
  },
  {
    id: "CHEM-301",
    title: "Organic Chemistry I: Reaction Mechanisms",
    subtitle: "Navigate SN1/SN2 substitutions, elimination kinetics, and stereocenters.",
    category: "Health & Sciences",
    subcategory: "Chemistry",
    difficulty: "Advanced",
    duration: "25h 00m",
    durationHours: 25.0,
    rating: 4.5,
    reviewsCount: 620,
    enrolledStudents: 3420,
    price: 119,
    image: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", // Red gradient
    instructor: {
      id: "inst-7",
      name: "Dr. Arthur Pendelton",
      title: "Senior Chemistry Lecturer at Caltech",
      bio: "Dr. Pendelton has been teaching organic chemistry for 15 years. His laboratory focuses on catalytic syntheses, and he is a recipient of multiple collegiate teaching awards.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      rating: 4.6,
      coursesCount: 2,
      studentsCount: 11200
    },
    overview: "Organic chemistry is notoriously challenging, but it doesn't have to be. This course breaks down complex reactions into simple thermodynamic and kinetic principles. You will master resonance, draw detailed arrow-pushing mechanisms, understand SN1, SN2, E1, and E2 pathways, and learn to confidently predict major and minor products under various solvent and temperature conditions.",
    outcomes: [
      "Confidence in drawing curved-arrow mechanisms for substitution reactions.",
      "Map SN1, SN2, E1, and E2 kinetics based on nucleophile strength and solvents.",
      "Assign stereocenter configurations (R/S) and draw chair conformations of cyclohexane.",
      "Solve advanced synthesis problems by working backwards using retrosynthetic analysis."
    ],
    curriculum: [
      {
        id: "chem-m1",
        title: "Module 1: Conformations & Stereochemistry",
        lessons: [
          {
            id: "chem-l1",
            title: "1.1 Resonance structures and Hybridization",
            duration: "18:40",
            durationSeconds: 1120,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Understand carbon orbital structures, calculate hybridizations, and learn the rules for drawing valid resonance structures."
          },
          {
            id: "chem-l2",
            title: "1.2 Chair Conformations of Substituted Cyclohexanes",
            duration: "24:10",
            durationSeconds: 1450,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Master drawing 3D chair configurations. Learn to place substituents in axial vs equatorial positions to minimize steric strain."
          }
        ]
      },
      {
        id: "chem-m2",
        title: "Module 2: Nucleophilic Substitutions (SN1 / SN2)",
        lessons: [
          {
            id: "chem-l3",
            title: "2.1 Kinetic Rates and Energy Profiles of SN1 vs SN2",
            duration: "29:30",
            durationSeconds: 1770,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Contrast single-step SN2 transitions against carbocation-mediated SN1 processes. Map energy activation diagrams."
          }
        ]
      }
    ],
    reviews: [
      {
        id: "rev-9",
        studentName: "Rachel Green",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80",
        rating: 4.8,
        comment: "This course literally saved my chemistry grade! Dr. Arthur makes arrow-pushing logic incredibly intuitive. The synthesis worksheets were incredibly comprehensive.",
        date: "2026-06-12"
      }
    ],
    featured: false
  },
  {
    id: "MKT-220",
    title: "Digital Marketing Strategy & Growth Hacking",
    subtitle: "Acquire users via SEO optimization, analytics tracking, and high-converting funnels.",
    category: "Business & Finance",
    subcategory: "Marketing",
    difficulty: "Intermediate",
    duration: "16h 15m",
    durationHours: 16.25,
    rating: 4.7,
    reviewsCount: 1105,
    enrolledStudents: 10420,
    price: 69,
    image: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)", // Indigo gradient
    instructor: {
      id: "inst-8",
      name: "Marcus Chen",
      title: "CMO of GrowthVibe & Lecturer at NYU Stern",
      bio: "Marcus is a growth marketer who engineered campaigns scaling startups to millions of users. He consults on marketing tech stacks and teaches brand acquisition strategies.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      rating: 4.8,
      coursesCount: 3,
      studentsCount: 67000
    },
    overview: "Traditional advertising is slow and expensive. This course introduces you to the digital marketing flywheel. We'll map the Pirate Growth Funnel (AARRR: Acquisition, Activation, Retention, Referral, Revenue), configure data analytics, explore modern Search Engine Optimization (SEO), manage Search Engine Marketing (SEM) budgets, and design high-impact viral content campaigns.",
    outcomes: [
      "Deconstruct and optimize user funnels using the AARRR pirate metrics.",
      "Conduct keyword research, execute technical SEO audits, and map search intent.",
      "Design and monitor predictive web landing pages using A/B testing frameworks.",
      "Analyze analytics dashboard flows to spot user dropoffs and fix conversions."
    ],
    curriculum: [
      {
        id: "mkt-m1",
        title: "Module 1: The Growth Hacking Framework",
        lessons: [
          {
            id: "mkt-l1",
            title: "1.1 The AARRR Growth Funnel Breakdown",
            duration: "15:10",
            durationSeconds: 910,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Deep dive into each stage of the funnel: how to successfully acquire, activate, retain, get referrals, and collect revenue from users."
          },
          {
            id: "mkt-l2",
            title: "1.2 Defining and Benchmarking your North Star Metric",
            duration: "12:50",
            durationSeconds: 770,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "How to avoid vanity metrics and identify the single most predictive metric that indicates long-term product value."
          }
        ]
      },
      {
        id: "mkt-m2",
        title: "Module 2: Acquisition & Funnel Conversions",
        lessons: [
          {
            id: "mkt-l3",
            title: "2.1 Search Engine Optimization (SEO) & Ranking Signals",
            duration: "21:30",
            durationSeconds: 1290,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Analyze crawl bots, keyword relevance, backlink authorities, page speeds, and writing for semantic search engines."
          },
          {
            id: "mkt-l4",
            title: "2.2 Crafting landing pages and handling A/B tests",
            duration: "19:15",
            durationSeconds: 1155,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "How to write high-converting copy, design layouts, use tools to test variations, and evaluate results using statistical significance."
          }
        ]
      }
    ],
    reviews: [
      {
        id: "rev-10",
        studentName: "Olivia Davis",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80",
        rating: 4.8,
        comment: "Incredibly action-oriented. We set up real tracking tags and wrote actual SEO copywriting copies. This is extremely useful for practical marketers.",
        date: "2026-06-18"
      }
    ],
    featured: false
  }
];
