import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Alex",
  lastName: "Chen",
  name: `Alex Chen`,
  role: "Quantum Chemistry PhD Student",
  avatar: "/images/avatar.jpg",
  email: "alex.chen@university.edu",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Mandarin"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Discover Research Connections</>,
  description: <>Navigate through my research landscape with an interactive network visualization that reveals how quantum chemistry topics connect and evolve</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alexchen-quantchem",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alex-chen-quantchem/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Quantum Chemistry PhD Student | Computational Methods & Electronic Structure Theory`,
  description: `PhD student in quantum chemistry at Columbia University developing computational methods for electronic structure calculations. Expert in Obara-Saika integrals, DFT, coupled-cluster theory, and high-performance quantum chemistry software.`,
  headline: <>Exploring molecular interactions through computational chemistry</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Research</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured paper
        </Text>
      </Row>
    ),
    href: "/blog",
  },
  subline: (
    <>
      I'm Alex, a PhD student in quantum chemistry at{" "}
      <Text onBackground="brand-medium" weight="strong">
        Columbia University
      </Text>
      , where I develop computational methods
      <br /> for understanding molecular interactions. I focus on electronic structure theory.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Columbia University`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Alex is a PhD student in quantum chemistry at Columbia University with a focus on 
        developing and implementing computational methods for electronic structure calculations. 
        Their research centers on improving the efficiency of electron repulsion integral 
        calculations and exploring novel approaches to correlation methods.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Research Experience",
    experiences: [
      {
        company: "Columbia University - Chemical Physics Laboratory",
        timeframe: "2022 - Present",
        role: "PhD Student in Quantum Chemistry",
        achievements: [
          <>
            <strong>Method Development:</strong> Developed novel algorithms for computing electron repulsion integrals 
            using the Obara-Saika recursion scheme, achieving 40% speedup for large basis sets in electronic structure calculations.
          </>,
          <>
            <strong>Software Implementation:</strong> Implemented parallel density functional theory (DFT) code in Python/C++ 
            for studying transition metal catalysts, with optimized integral evaluation and SCF convergence algorithms.
          </>,
          <>
            <strong>Catalyst Design:</strong> Applied quantum chemical methods to design organometallic catalysts for CO₂ reduction, 
            identifying novel copper-based complexes with 15% higher conversion efficiency through computational screening.
          </>,
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop&crop=entropy&cs=tinysrgb",
            alt: "Molecular orbital visualization and computational chemistry setup",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MIT - Theoretical Chemistry Group",
        timeframe: "2020 - 2022",
        role: "Undergraduate Research Assistant",
        achievements: [
          <>
            <strong>Electronic Structure Theory:</strong> Contributed to development of coupled-cluster methods for 
            accurate treatment of electron correlation in transition metal complexes and main-group compounds.
          </>,
          <>
            <strong>High-Performance Computing:</strong> Optimized quantum chemistry calculations for supercomputing clusters, 
            reducing computational time for CCSD(T) calculations by 30% through efficient memory management.
          </>,
          <>
            <strong>Machine Learning Integration:</strong> Developed ML models to predict molecular properties from 
            electronic structure descriptors, achieving high accuracy (R² &gt; 0.95) for bond dissociation energies in organometallic systems.
          </>,
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&h=450&fit=crop&crop=entropy&cs=tinysrgb",
            alt: "High-performance computing cluster for quantum chemistry calculations",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Research Publications & Impact",
        timeframe: "2021 - Present",
        role: "Scientific Contributions",
        achievements: [
          <>
            <strong>First-Author Publications:</strong> "Efficient Evaluation of Electron Repulsion Integrals Using Modified Obara-Saika Recursions" 
            - J. Chem. Phys. (2024); "Machine Learning Accelerated Discovery of CO₂ Reduction Catalysts" - Nature Catalysis (2024).
          </>,
          <>
            <strong>Awards & Recognition:</strong> NSF Graduate Research Fellowship (2022), ACS Division of Physical Chemistry Graduate Award (2024), 
            DOE Computational Science Graduate Fellowship (2023), Outstanding Graduate Research Award - Columbia Chemistry (2024).
          </>,
          <>
            <strong>Conference Presentations:</strong> 15 presentations at major conferences including ACS National Meetings, 
            Gordon Research Conferences, and International Congress of Quantum Chemistry. Invited speaker at 3 international workshops on computational catalysis.
          </>,
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop&crop=entropy&cs=tinysrgb",
            alt: "Scientific conference presentation on quantum chemistry research",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Open Source & Software Development",
        timeframe: "2020 - Present", 
        role: "Scientific Software Developer",
        achievements: [
          <>
            <strong>QChemTools:</strong> Lead developer of open-source Python library for quantum chemistry calculations, 
            with 500+ GitHub stars and adoption by 20+ research groups worldwide for electronic structure analysis.
          </>,
          <>
            <strong>Integral Library:</strong> Contributed optimized C++ routines for electron repulsion integral evaluation 
            to the PySCF quantum chemistry package, improving performance for large molecular systems by 25%.
          </>,
          <>
            <strong>Documentation & Tutorials:</strong> Created comprehensive documentation and interactive Jupyter notebooks 
            for quantum chemistry methods, used in graduate courses at 10+ universities and cited in 50+ research papers.
          </>,
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop&crop=entropy&cs=tinysrgb",
            alt: "Python code development for quantum chemistry software",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Columbia University",
        description: <>PhD in Chemistry, specializing in Quantum Chemistry and Computational Methods.</>,
      },
      {
        name: "Massachusetts Institute of Technology",
        description: <>B.S. in Chemistry with minor in Computer Science, Magna Cum Laude.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Quantum Chemistry Software & Theory",
        description: (
          <>Expert in electronic structure theory using Gaussian, ORCA, Q-Chem, PySCF, and MOLPRO. Specialized in DFT, post-Hartree-Fock methods (MP2, CCSD(T)), and multireference approaches (CASSCF, MRCI).</>
        ),
        tags: [
          {
            name: "Gaussian",
            icon: "code",
          },
          {
            name: "ORCA",
            icon: "code",
          },
          {
            name: "PySCF",
            icon: "python",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop&crop=entropy&cs=tinysrgb",
            alt: "Molecular orbital visualization and electronic structure calculations",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Programming & Scientific Computing",
        description: (
          <>Proficient in Python, C++, FORTRAN for developing quantum chemistry algorithms. Expert in NumPy, SciPy, pandas for scientific computing and data analysis. Experience with parallel computing using MPI and OpenMP.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "C++",
            icon: "code",
          },
          {
            name: "NumPy",
            icon: "python",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop&crop=entropy&cs=tinysrgb",
            alt: "Scientific programming and algorithm development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Electronic Structure & Basis Sets",
        description: (
          <>Expert knowledge of correlation-consistent, Dunning, and Pople basis sets. Proficient in post-Hartree-Fock methods including MP2, CCSD(T), and multireference approaches for accurate treatment of electron correlation.</>
        ),
        tags: [
          {
            name: "cc-pVXZ",
            icon: "code",
          },
          {
            name: "CCSD(T)",
            icon: "code",
          },
          {
            name: "CASSCF",
            icon: "code",
          },
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop&crop=entropy&cs=tinysrgb",
            alt: "Quantum chemistry methods and basis set calculations",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "High-Performance Computing",
        description: (
          <>Experience with parallel computing, job schedulers (SLURM, PBS), and optimizing quantum chemistry calculations for supercomputer architectures.</>
        ),
        tags: [
          {
            name: "SLURM",
            icon: "server",
          },
          {
            name: "MPI",
            icon: "code",
          },
          {
            name: "OpenMP",
            icon: "code",
          },
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&h=450&fit=crop&crop=entropy&cs=tinysrgb",
            alt: "High-performance computing and supercomputer architectures",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Essential Quantum Chemistry Methods & Computational Theory",
  description: `In-depth articles on quantum chemistry methods including Obara-Saika integrals, coupled-cluster theory, DFT functionals, and electronic structure calculations for researchers and graduate students.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Research Projects - ${person.name} | Quantum Chemistry Software & Methods`,
  description: `Open-source quantum chemistry software, electronic structure libraries, and computational method development projects including optimized integral evaluation and machine learning applications.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Scientific Visualizations – ${person.name}`,
  description: `Molecular structures, potential energy surfaces, and computational results from quantum chemistry research`,
  // Images showcase computational chemistry visualizations
  // These are placeholder images, replace with your own scientific visualizations
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Transition state structure for CO2 reduction catalyst",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Molecular orbital visualization showing d-orbital interactions",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Potential energy surface for catalytic reaction pathway",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Electrostatic potential map of organometallic complex",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Density of states plot for transition metal d-orbitals",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Reaction coordinate diagram showing activation barriers",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Machine learning model predictions vs experimental data",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Crystal field splitting diagram for octahedral complex",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
