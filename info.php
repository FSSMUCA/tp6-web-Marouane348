<!DOCTYPE html>
<html>
<head>
    <title>TP6 - Info PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>TP6 - Page PHP</h1>
        
        <div class="calculatrice">
            <h2>Variables PHP simples</h2>
            
            <?php
            $ecole = "Mon École";
            $matiere = "Développement Web";
            $annee = 2024;
            
            echo "<p><strong>École:</strong> " . $ecole . "</p>";
            echo "<p><strong>Matière:</strong> " . $matiere . "</p>";
            echo "<p><strong>Année:</strong> " . $annee . "</p>";
            ?>
        </div>
        
        <div class="calculatrice">
            <h2>Calculs en PHP</h2>
            
            <?php
            $x = 15;
            $y = 3;
            
            echo "<p>Nombre 1 = " . $x . "</p>";
            echo "<p>Nombre 2 = " . $y . "</p>";
            
            $add = $x + $y;
            $mult = $x * $y;
            $div = $x / $y;
            
            echo "<p><strong>Addition:</strong> " . $x . " + " . $y . " = " . $add . "</p>";
            echo "<p><strong>Multiplication:</strong> " . $x . " × " . $y . " = " . $mult . "</p>";
            echo "<p><strong>Division:</strong> " . $x . " ÷ " . $y . " = " . $div . "</p>";
            ?>
        </div>
        
        <div class="calculatrice">
            <h2>Date et heure du serveur</h2>
            
            <?php
            $date = date("d/m/Y");
            $heure = date("H:i:s");
            
            echo "<p><strong>Date:</strong> " . $date . "</p>";
            echo "<p><strong>Heure:</strong> " . $heure . "</p>";
            ?>
        </div>
        
        <div class="liens">
            <a href="index.html">← Retour à la calculatrice</a>
        </div>
        
        <div class="footer">
            <p>Page PHP générée le <?php echo date("d/m/Y à H:i:s"); ?></p>
        </div>
    </div>
</body>
</html>  